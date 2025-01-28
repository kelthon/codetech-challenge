import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '5000'),
  jwt: {
    secret: process.env.JWT_SECRET || "mysecrettoken",
    expiresIn: parseInt(process.env.JWT_EXPIRES_IN || '3600'),
  },
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    name: process.env.DATABASE_NAME || 'postgres',
    synchronize: process.env.NODE_ENV === 'development',
  },
};
