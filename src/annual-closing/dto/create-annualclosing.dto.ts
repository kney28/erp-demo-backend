import { IsNotEmpty } from 'class-validator';

export class CreateAnnualClosingDto {
  @IsNotEmpty()
  validity: number;

  @IsNotEmpty()
  month: string;
}
