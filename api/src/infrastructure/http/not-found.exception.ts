import { HTTPException } from "./exception";
import { StatusCode } from "./status-code";

export class NotFoundException extends HTTPException {
  constructor(public message: string = "Not Found") {
    super(StatusCode.NotFound, message);
  }
}