import { IsAlpha, IsDefined, IsNumber, IsString, Length, Matches, Min, NotContains } from 'class-validator';

export class CreateStudentDTO {
  @IsDefined()
  @IsString()
  @Matches("[azAZ ]+")
  @Length(3)
  name: string;

  @IsDefined()
  @IsString()
  @Length(2)
  grade: string;

  @IsDefined()
  @IsNumber()
  @Min(5)
  age: number;
}
