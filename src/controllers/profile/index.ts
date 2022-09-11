import { Request, Response } from 'express';
import { UserService } from '../../services/user';
import { сoinsPerDay } from '../../constants';

class ProfileController {
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }
  
  // check auth
  public me = async(_: Request, res: Response) => {
    return res.json({ success: true });
  };

  // get profile info
  public getInfo = async(req: Request, res: Response) => {
    const { id } = req;

    try {
      const user = await this.userService.getUserById(id);
      const profile = user.profile;
      const level = user.profile.level;
      const visit = user.profile.visit;

      const profileVisitDate = profile.updatedDate.toLocaleDateString();

      const now = new Date();
      const nowDate = now.toLocaleDateString();

      // Проверка на дату последнего посещения
      if(nowDate !== profileVisitDate) {
        await this.userService.updateDate({
          date: now,
          profileId: user.profileId
        });
      }

      // Прошло ли семь дней с последнего входа
      const isBeen7Days = Math.ceil((now.getTime() - profile.updatedDate.getTime()) / 1000 / 60 / 60 / 24);

      if(isBeen7Days) {
        await this.userService.resetVisit(profile.visitId);
      }
      
      const mapDay = {
        0: 'Su',
        1: 'Mo',
        2: 'Tu',
        3: 'We',
        4: 'Th',
        5: 'Fr',
        6: 'Sa',
      };
      const currentDay = mapDay[profile.updatedDate.getDay()];
      if(!visit[currentDay]) {
        await this.userService.updateVisit({
          day: currentDay,
          visitId: profile.visitId,
        });
      }

      const actualVisit = await this.userService.getVisit(profile.visitId);

      const response = {
        name: user.name,
        balance: profile.balance,
        words: profile.words,
        isFirstEntry: nowDate !== profileVisitDate,
        level: {
          ...level,
          levelId: undefined,
        },
        visit: {
          ...actualVisit,
          visitId: undefined,
        }
      };
      return res.json(response);
    } catch (error) {
      return res.status(500).json({success: false});
    }
  };

  // bonus accrual every day
  public accrue = async(req: Request, res: Response) => {
    const { id } = req;

    try {
      const user = await this.userService.getUserById(id);
      const { balance, isBonusEarned } = user.profile;

      if(isBonusEarned) {
        return res.status(500).json({ success: false }); 
      }

      const { profileId } = user;
      const newBalance = balance + сoinsPerDay;
      
      await this.userService.updateBalance({
        coins: newBalance,
        profileId,
      });

      return res.json({ success: true, coins: сoinsPerDay });
    } catch (error) {
      return res.status(500).json({success: false});
    }
  };
}
export default ProfileController;
