import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';

export class RequestsLoggerHandler {
  static handle(req: Request, res: Response, next: NextFunction) {
    logger.info(`${req.method}: ${req.url}`);
    next();
  }
}
