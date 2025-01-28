import { IsAlpha, IsDefined, IsNumber, IsString, Length, Matches, Min, NotContains } from 'class-validator';

export class CreateStudentDTO {
  @Matches("[azAZ ]+")
  @Length(3)
  @IsString()
  @IsDefined()
  name: string;

  @Length(2)
  @IsString()
  @IsDefined()
  grade: string;

  @Min(5)
  @IsNumber()
  @IsDefined()
  age: number;
}
