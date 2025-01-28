import bcrypt from 'bcrypt';
import { PasswordService } from '../../domain/interface/password.service';

export class BCryptPasswordService implements PasswordService {
  constructor(private saltRounds: number = 10) {}

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
