import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserService } from '../../services/user';

class AuthController {
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }

  // Register new user
  public register = async(req: Request, res: Response) => {
    const requestData = req.body;
    const { login, password, name } = requestData;

    if (!login && !password && !name) {
      return res.status(400).json({ message: 'Неверные данные' });
    }

    try {
      const candidate = await this.userService.checkUserLogin(login);
    
      if(candidate) {
        return res.status(400).json({ message: 'Такой login уже занят' });
      }
  
      // crypt password
      const hashedPassword = await bcrypt.hash(password, 12);
      const userData = {
        ...requestData,
        password: hashedPassword
      };
  
      try {
        await this.userService.registerUser(userData);
      } catch (error) {
        return res.status(500).json({success: false});
      }
      
      return res.json({success: true});
    } catch (e) {
      return res.status(500).json({ message: e });
    }
  };

  // Login user
  public login = async(req: Request, res: Response) => {
    const { login, password} = req.body;
    if (!login && !password) {
      return res.status(400).json({ message: 'Неверные данные' });
    }
    
    try {
      const user = await this.userService.checkUserLogin(login);
    
      if(!user) {
        return res.status(400).json({ message: 'Такого пользователя нет' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: '7d'
      });
  
      const options = {
        maxAge: 1000 * 60 * 24 * 7,
        sameSite : "none",
        secure: true,
        domain: process.env.CLIENT_URL,
        httpOnly: true,
      };
  
      res.cookie('token', token, options);
      return res.json({ success: true });
    } catch (e) {
      return res.status(500).json({ message: e });
    }
  };

  // Logout
  public logout = async(req: Request, res: Response) => {
    res.clearCookie('token');
    return res.json({ success: true });
  };
}
export default AuthController;
