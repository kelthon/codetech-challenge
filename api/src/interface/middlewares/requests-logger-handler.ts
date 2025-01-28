import { NextFunction, Request, Response } from 'express';
import { RequestsLoggerHandler } from '../../infrastructure/middlewares/requests-logger-handler.middleware';

export function requestsLoggerHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  RequestsLoggerHandler.handle(req, res, next);
}
