import { Request, Response } from 'express';
import { UserService } from '../../services/user';

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

      const response = {
        name: user.name,
        balance: profile.balance,
        words: profile.words,
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
}
export default ProfileController;
