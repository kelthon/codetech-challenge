import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import { StatusCode } from '../http/status-code';
import { User } from '../../domain/entities/user.entity';
import { DeepPartial } from 'typeorm';

export class AutheticationHandler {
  static handle(req: any, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.sendStatus(StatusCode.UnauthorizedError);
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(StatusCode.Forbidden);
      }
      req.user = user as any;
      next();
    });
  }
}
