import { IsDefined, IsNumberString } from 'class-validator';

export class DeleteStudentDTO {
  @IsNumberString()
  @IsDefined()
  studentId: number;
}
