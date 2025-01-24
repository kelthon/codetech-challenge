import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { SignIn } from '../../use_cases/signin.case';
import { TypeOrmUserRepository } from '../../infrastructure/repositories/user-typeorm.repository';
import { BCryptPasswordService } from '../../infrastructure/services/password.service';
import { dataSource } from '../../infrastructure/database/typeorm.config';
import { UserEntity } from '../../infrastructure/entities/user.entity';

const route = Router();
const userRepository = new TypeOrmUserRepository(
  dataSource.getRepository(UserEntity),
);
const passwordService = new BCryptPasswordService();
const signinUseCase = new SignIn(userRepository, passwordService);
const authController = new AuthController(signinUseCase);

route.post('/auth', (req, res) => authController.signin(req, res));

export { route as authRoutes };
