import { StudentRepository } from '../domain/interface/student.repository';
import { DeleteStudentDTO } from '../infrastructure/dtos/delete-student.dto';
import { BadRequestException } from '../infrastructure/http/bad-request.exception';

export class DeleteStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(deleteStudentDTO: DeleteStudentDTO) {
    const result = await this.studentRepository.delete(
      +deleteStudentDTO.studentId,
    );

    if(!result) {
      throw new BadRequestException("Student not found");
    }

    return result;
  }
}
