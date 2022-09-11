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
    const user = await this.userService.getUserById(id);
    console.log(user);

    return res.json(user);
  };
}
export default ProfileController;
