import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../http/exception';

export class ExceptionHandler {
  static handle(err: HTTPException, req: Request, res: Response, next: NextFunction) {
    return res.status(err.code).json({ statusCode: err.code, message: err.message });
  }
}
