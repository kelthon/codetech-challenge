import { IsAlpha, IsNumber, IsString, Length, Min } from 'class-validator';

export class DeleteStudentDTO {
  @IsNumber()
  @Min(1)
  studentId: number;
}
