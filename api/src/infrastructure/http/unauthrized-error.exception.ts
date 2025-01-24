import { StatusCode } from './status-code';
import { HTTPException } from "./exception";

export class UnauthorizedErrorException extends HTTPException {
  constructor(public message: string = 'Unauthorized') {
    super(StatusCode.UnauthorizedError, message);
  }
}
