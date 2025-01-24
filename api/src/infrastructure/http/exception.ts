import { StatusCode } from "./status-code";

export class HTTPException extends Error {
  constructor(public code: StatusCode, public message: string = "HTTP Exception") {
    super(message);
  }
}