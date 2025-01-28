import { BCryptPasswordService } from '../../../src/infrastructure/services/password.service';

describe('Password Service', () => {
  const service = new BCryptPasswordService();
  const password = 'password';
  let hashedPassword: string;

  beforeAll(async () => {
    hashedPassword = await service.hashPassword(password);
  });

  it('should hash password correctly', async () => {
    expect(hashedPassword).not.toBe(password);
    expect(hashedPassword).toMatch(/^\$2[ayb]\$.{56}$/);
  });

  it('should return true for correct password comparison', async () => {
    const isMatch = await service.comparePasswords(password, hashedPassword);
    expect(isMatch).toBe(true);
  });

  it('should return false for incorrect password comparison', async () => {
    const isMatch = await service.comparePasswords('WrongPassword', hashedPassword);
    expect(isMatch).toBe(false);
  });
});
