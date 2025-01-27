import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { SignIn } from '../../use_cases/signin.case';
import { SignInDto } from '../../infrastructure/dtos/signin.dto';
import { BadRequestException } from '../../infrastructure/http/bad-request.exception';

export class AuthController {
  constructor(private readonly signIn: SignIn) {}

  async signin(req: Request, res: Response, next: NextFunction) {
    const dto = Object.assign(new SignInDto(), req.body);

    const errors = await validate(dto, {
      ValidationError: { target: false, property: false },
    });

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    this.signIn
      .execute(dto)
      .then(({ userId, email }) => res.json({ userId, email }))
      .catch((err) => next(err));

    return res;
  }
}
