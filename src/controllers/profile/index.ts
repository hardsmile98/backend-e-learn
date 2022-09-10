import { Request, Response } from 'express'
import { UserService } from '../../services/user'

class ProfileController {
  public me = async(req: Request, res: Response) => {
    return res.json({ success: true })
  }
}
export default ProfileController;
