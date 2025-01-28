import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../http/exception';
import { StatusCode } from '../http/status-code';

export class ExceptionHandler {
  static handle(
    err: HTTPException,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    return res.status(err.code || StatusCode.InternalServerError).json({
      statusCode: err.code || StatusCode.InternalServerError,
      message: err.message || 'Internal Server Error',
    });
  }
}
