import { StatusCode } from "./status-code";
import { HTTPException } from "./exception";

export class BadRequestException extends HTTPException {
  constructor(public message: string = "Bad request") {
    super(StatusCode.BadRequest, message);
  }
}
