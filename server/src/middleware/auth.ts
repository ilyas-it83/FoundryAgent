import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

interface UserPayload {
  id: string;
  username: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers['authorization']?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
