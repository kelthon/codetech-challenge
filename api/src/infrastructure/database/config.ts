import { DataSource } from 'typeorm';
import { UserModel } from '../models/UserModel';
import { StudentModel } from '../models/StudentModel';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'codetech',
  synchronize: true,
  logging: false,
  entities: [UserModel, StudentModel],
  subscribers: [],
  migrations: [],
});
