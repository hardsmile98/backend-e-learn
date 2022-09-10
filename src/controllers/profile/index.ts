import { Request, Response } from 'express';

class ProfileController {
  public me = async(_: Request, res: Response) => {
    return res.json({ success: true });
  };
}
export default ProfileController;
