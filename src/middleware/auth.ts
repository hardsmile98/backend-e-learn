import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

type IJWTPayload = {
    id: number,
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const { token } = req.cookies;
    if(!token) {
      return res.status(401).json({ message: 'Нет авторизации' });
    }

    const decode = <IJWTPayload>jwt.verify(token, process.env.SECRET);
    const { id } = decode;
    req.id = id;

    next();
  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации' });
  }
};

export default auth;
