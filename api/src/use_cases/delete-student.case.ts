import { StudentRepository } from '../domain/interface/student.repository';
import { DeleteStudentDTO } from '../infrastructure/dtos/delete-student.dto';

export class DeleteStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(deleteStudentDTO: DeleteStudentDTO) {
    return this.studentRepository.delete(+deleteStudentDTO.studentId);
  }
}
