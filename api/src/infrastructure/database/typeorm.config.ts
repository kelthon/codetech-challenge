import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { StudentEntity } from '../entities/student.entity';
import { config } from '../config/config';

export const dataSource = new DataSource({
  type: 'postgres',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
  synchronize: config.database.synchronize,
  logging: false,
  entities: [UserEntity, StudentEntity],
  subscribers: [],
  migrations: [],
});
