import { Request, Response } from 'express';
import { UserService } from '../../services/user';
import { сoinsPerDay } from '../../constants';

class ProfileController {
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }
  
  // проверка при входе на авторизацию
  public me = async(_: Request, res: Response) => {
    return res.json({ success: true });
  };

  // получаем информацию о профиле пользователя
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

      const mapDay = {
        0: 'Su',
        1: 'Mo',
        2: 'Tu',
        3: 'We',
        4: 'Th',
        5: 'Fr',
        6: 'Sa',
      };

      const numberDayPassed = Math.floor((now.getTime() - profile.updatedDate.getTime()) / 1000 / 60 / 60 / 24);

      if(numberDayPassed > 1) {
        const nowDay = now.getDay();
        const lastVisitDay = profile.updatedDate.getDay();
      
        const startDay = nowDay < lastVisitDay ? 0 : lastVisitDay;
        const newVisit = new Array(nowDay - startDay - 1).fill(0).reduce((acc, _, index) => {
          acc[mapDay[startDay + index + 1]] = false;
          return acc;
        }, {});

        await this.userService.updateVisit({
          visitId: profile.visitId,
          newVisit,
        });
      }

      const currentDay = mapDay[profile.updatedDate.getDay()];
      if(!visit[currentDay]) {
        await this.userService.updateVisit({
          newVisit: {
            [currentDay]: true,
          },
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

  // начисление бонуса каждый день
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
