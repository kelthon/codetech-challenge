import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../../infrastructure/http/exception';
import { ExceptionHandler } from '../../infrastructure/middlewares/exception-handler.middleware';

export function exceptionHandler(
  err: HTTPException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  ExceptionHandler.handle(err, req, res, next);
}
