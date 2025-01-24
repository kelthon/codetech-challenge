import { HTTPException } from './exception';
import { StatusCode } from './status-code';

export class InternalServerErrorException extends HTTPException {
  constructor(public message: string = 'Internal Server Error') {
    super(StatusCode.InternalServerError, message);
  }
}
