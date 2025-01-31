import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/interface/user.repository';
import { UserEntity } from '../entities/user.entity';

export class TypeOrmUserRepository implements UserRepository {
  constructor(private readonly userDataSource: Repository<UserEntity>) {}

  async findAll(): Promise<User[]> {
    const entities = await this.userDataSource.find();
    return entities.map((entity) => this.toUser(entity));
  }

  async findOne(userId: number): Promise<User | null> {
    const entity = await this.userDataSource.findOneBy({ userId });

    if (!entity) {
      return null;
    }

    return this.toUser(entity);
  }

  async findByEmail(email: string): Promise<User | null> {
    const entity = await this.userDataSource.findOneBy({ email });

    if (!entity) {
      return null;
    }

    return this.toUser(entity);
  }

  async create(user: UserEntity): Promise<User> {
    const entity = await this.userDataSource.save(user);
    return this.toUser(entity);
  }

  async delete(userId: number): Promise<boolean> {
    const result = await this.userDataSource.delete(userId);

    if (result.affected && result.affected > 0) {
      return true;
    }

    return false;
  }

  toUser(entity: UserEntity) {
    return new User(entity.userId, entity.email, entity.hashedPassword);
  }
}
