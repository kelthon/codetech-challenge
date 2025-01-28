import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { CreateStudentDTO } from '../../infrastructure/dtos/create-student.dto';
import { DeleteStudentDTO } from '../../infrastructure/dtos/delete-student.dto';
import { StatusCode } from '../../infrastructure/http/status-code';
import { CreateStudent } from '../../use_cases/create-student.case';
import { DeleteStudent } from '../../use_cases/delete-student.case';
import { FindStudent } from '../../use_cases/find-student.case';
import { BadRequestException } from '../../infrastructure/http/bad-request.exception';

export class StudentController {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly findStudent: FindStudent,
    private readonly deleteStudent: DeleteStudent,
  ) {}

  async findAll(req: Request, res: Response, next: NextFunction) {
    this.findStudent
      .execute()
      .then((students) => res.json(students))
      .catch((err) => next(err));
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const dto = Object.assign(new CreateStudentDTO(), req.body);
    const errors = await validate(dto, {
      ValidationError: { target: false, property: false },
    });

    if (errors.length > 0) {
      return res.status(StatusCode.BadRequest).json(errors);
    }

    this.createStudent
      .execute(dto)
      .then((student) => res.json(student))
      .catch((err) => next(err));
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const dto = Object.assign(new DeleteStudentDTO(), req.params as any);
    const errors = await validate(dto, {
      ValidationError: { target: false, property: false },
    });

    if (errors.length > 0) {
      return res.status(StatusCode.BadRequest).json(errors);
    }

    this.deleteStudent
      .execute(dto)
      .then((result) =>
        res.status(StatusCode.OK).json({ message: 'Deleted with successfully' }),
      )
      .catch((err) => next(err));
  }
}
