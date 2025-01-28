import { NextFunction, Request, Response } from 'express';
import { NotFoundException } from '../http/not-found.exception';

export class FallbackHandler {
  static handle(req: Request, res: Response, next: NextFunction) {
    try {
      throw new NotFoundException();
    } catch (err) {
      next(err);
    }
  }
}
