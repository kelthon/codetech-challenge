import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column({ length: 75 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 15 })
  grade: string;
}
