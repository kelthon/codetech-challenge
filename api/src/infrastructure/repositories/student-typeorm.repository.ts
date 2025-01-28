import { Repository } from 'typeorm';
import { StudentRepository } from '../../domain/interface/student.repository';
import { StudentEntity } from '../entities/student.entity';
import { Student } from '../../domain/entities/student.entity';

export class TypeOrmStudentRepository implements StudentRepository {
  constructor(private readonly studentDataSource: Repository<StudentEntity>) {}

  async findAll(): Promise<Student[]> {
    const entities = await this.studentDataSource.find();
    return entities.map((entity) => this.toStudent(entity));
  }

  async findOne(studentId: number): Promise<Student | null> {
    const entity = await this.studentDataSource.findOneBy({ studentId });

    if (!entity) {
      return null;
    }

    return this.toStudent(entity);
  }

  async create(student: StudentEntity): Promise<Student> {
    const entity = await this.studentDataSource.save(student);
    return this.toStudent(entity);
  }

  async delete(studentId: number): Promise<void> {
    await this.studentDataSource.delete(studentId);
  }

  toStudent(entity: StudentEntity) {
    return new Student(entity.studentId, entity.name, entity.age, entity.grade);
  }
}
