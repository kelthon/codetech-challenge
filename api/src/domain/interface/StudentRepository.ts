import { Student } from "../entities/Student";

export interface StudentRepository {
  findAll(): Promise<Student[]>;
  findOne(studentId: number): Promise<Student | null>;
  create(student: Student): Promise<Student>;
  delete(studentId: number): Promise<void>;
}