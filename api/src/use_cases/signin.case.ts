import { UserRepository } from '../domain/interface/user.repository';
import { PasswordService } from '../domain/interface/password.service';
import { SignInDto } from '../infrastructure/dtos/signin.dto';

export class SignIn {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async execute({ email, password }: SignInDto) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Not Found User');
    }

    if (!this.passwordService.comparePasswords(password, user.hashedPassword)) {
      throw new Error('Password Incorrect');
    }

    return user;
  }
}
