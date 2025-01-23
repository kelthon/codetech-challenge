import { User } from '../entities/User';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(userId: number): Promise<User | null>;
  create(user: User): Promise<User>;
  delete(userId: number): Promise<void>;
}
