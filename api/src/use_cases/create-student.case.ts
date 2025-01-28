import { StudentRepository } from '../domain/interface/student.repository';
import { CreateStudentDTO } from '../infrastructure/dtos/create-student.dto';
import { StudentEntity } from '../infrastructure/entities/student.entity';

export class CreateStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(createStudentDTO: CreateStudentDTO) {
    const studentEntity = Object.assign(new StudentEntity(), createStudentDTO);
    return this.studentRepository.create(studentEntity);
  }
}
