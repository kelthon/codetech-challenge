export class User {
  constructor(
    public readonly userId: number,
    public email: string,
    public hashedPassword: string,
  ) {}
}
