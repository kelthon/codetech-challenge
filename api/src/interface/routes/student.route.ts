import { Router } from 'express';
import { dataSource } from '../../infrastructure/database/typeorm.config';
import { StudentEntity } from '../../infrastructure/entities/student.entity';
import { TypeOrmStudentRepository } from '../../infrastructure/repositories/student-typeorm.repository';
import { CreateStudent } from '../../use_cases/create-student.case';
import { DeleteStudent } from '../../use_cases/delete-student.case';
import { FindStudent } from '../../use_cases/find-student.case';
import { StudentController } from '../controllers/student.controller';

const route = Router();
const studentRepository = new TypeOrmStudentRepository(
  dataSource.getRepository(StudentEntity),
);
const findStudentUseCase = new FindStudent(studentRepository);
const createStudentUseCase = new CreateStudent(studentRepository);
const deleteStudentUseCase = new DeleteStudent(studentRepository);

const studentController = new StudentController(
  createStudentUseCase,
  findStudentUseCase,
  deleteStudentUseCase,
);

route.post('/students', (req, res, next) => {
  try {
    studentController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

route.get('/students', (req, res, next) => {
  try {
    studentController.findAll(req, res, next);
  } catch (err) {
    next(err);
  }
});

route.delete('/students/:studentId', (req, res, next) => {
  try {
    studentController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export { route as studentRoutes };
