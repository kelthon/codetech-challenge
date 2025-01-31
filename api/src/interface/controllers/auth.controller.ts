import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { SignIn } from '../../use_cases/signin.case';
import { SignInDto } from '../../infrastructure/dtos/signin.dto';
import { StatusCode } from '../../infrastructure/http/status-code';
import jwt from 'jsonwebtoken';
import { config } from '../../infrastructure/config/config';

export class AuthController {
  constructor(private readonly signIn: SignIn) {}

  async signin(req: Request, res: Response, next: NextFunction) {
    const dto = Object.assign(new SignInDto(), req.body);

    const errors = await validate(dto, {
      ValidationError: { target: false, property: false },
    });

    if (errors.length > 0) {
      return res.status(StatusCode.BadRequest).json(errors);
    }

    this.signIn
      .execute(dto)
      .then(({ userId, email }) => {
        res.status(StatusCode.OK).json({
          user: { userId, email },
          token: jwt.sign({ id: userId, email: email }, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
          }),
          expiresIn: config.jwt.expiresIn,
        });
      })
      .catch((err) => next(err));

    return res;
  }
}
