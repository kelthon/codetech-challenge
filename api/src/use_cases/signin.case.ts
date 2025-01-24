import { UserRepository } from '../domain/interface/user.repository';
import { PasswordService } from '../domain/interface/password.service';
import { SignInDto } from '../infrastructure/dtos/signin.dto';
import { BadRequestException } from '../infrastructure/http/bad-request.exception';

export class SignIn {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async execute({ email, password }: SignInDto) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new BadRequestException('User was not found');
    }

    if (!this.passwordService.comparePasswords(password, user.hashedPassword)) {
      throw new BadRequestException('User password was incorrect');
    }

    return user;
  }
}
