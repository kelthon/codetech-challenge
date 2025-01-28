import { StudentRepository } from '../domain/interface/student.repository';

export class FindStudent {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute() {
    return this.studentRepository.findAll();
  }
}
