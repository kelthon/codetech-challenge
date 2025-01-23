import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { StudentEntity } from '../entities/student.entity';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'codetech',
  synchronize: true,
  logging: false,
  entities: [UserEntity, StudentEntity],
  subscribers: [],
  migrations: [],
});
