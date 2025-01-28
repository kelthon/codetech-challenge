import { NextFunction, Request, Response } from 'express';
import { FallbackHandler } from '../../infrastructure/middlewares/fallback-handler.middleware';

export function fallbackHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  FallbackHandler.handle(req, res, next);
}
