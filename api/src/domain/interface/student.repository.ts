import { Student } from '../entities/student.entity';

export interface StudentRepository {
  findAll(): Promise<Student[]>;
  findOne(studentId: number): Promise<Student | null>;
  create(student: Student): Promise<Student>;
  delete(studentId: number): Promise<boolean>;
}
