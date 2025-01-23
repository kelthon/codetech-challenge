import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentModel {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gradeId: number;
}
