import { NextFunction, Request, Response } from 'express';
import { AutheticationHandler } from '../../infrastructure/middlewares/authetication-handler.middleware';

export function autheticationHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  AutheticationHandler.handle(req, res, next);
}
