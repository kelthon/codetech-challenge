import { IsAlpha, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateStudentDTO {
  @IsString()
  @IsAlpha()
  @Length(3)
  name: string;

  @IsString()
  @Length(2)
  grade: string;

  @IsNumber()
  @Min(5)
  age: number;
}
