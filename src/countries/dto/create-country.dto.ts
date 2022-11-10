import { IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: number;
}
