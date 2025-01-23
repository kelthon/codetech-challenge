import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 255 })
  hashedPassword: string;
}
