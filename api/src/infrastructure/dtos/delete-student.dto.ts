import { IsAlpha, IsDefined, IsNumber, IsString, Length, Min } from 'class-validator';

export class DeleteStudentDTO {
  @IsDefined()
  @IsNumber()
  @Min(1)
  studentId: number;
}
