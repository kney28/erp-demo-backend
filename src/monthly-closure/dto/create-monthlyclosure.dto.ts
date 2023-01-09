import { IsNotEmpty } from 'class-validator';

export class CreateMonthlyClosureDto {
  @IsNotEmpty()
  month: string;
}
