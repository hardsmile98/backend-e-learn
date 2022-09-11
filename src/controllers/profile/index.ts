import { Request, Response } from 'express';
import { UserService } from '../../services/user';
import { сoinsPerDay } from '../../constants';

class ProfileController {
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }
  
  public me = async(_: Request, res: Response) => {
    return res.json({ success: true });
  };

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

      if(nowDate !== profileVisitDate) {
        await this.userService.updateDate({
          date: now,
          profileId: user.profileId
        });
      }

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
          ...visit,
          visitId: undefined,
        }
      };
      return res.json(response);
    } catch (error) {
      return res.status(500).json({success: false});
    }
  };

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

      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({success: false});
    }
  };
}
export default ProfileController;
