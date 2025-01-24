import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { SignIn } from '../../use_cases/signin.case';
import { SignInDto } from '../../infrastructure/dtos/signin.dto';
import { Code } from '../../infrastructure/http/http';
import { BadRequestException } from '../../infrastructure/http/bad-request.exception';


export class AuthController {
  constructor(private readonly signIn: SignIn) {}

  async signin(req: Request, res: Response): Promise<any> {
    const dto = Object.assign(new SignInDto(), req.body);
    const errors = await validate(dto, {
      ValidationError: { target: false, property: false },
    });

    if (errors.length > 0) {
      throw new BadRequestException();
    }

    return res.json(await this.signIn.execute(dto));
  }
}
