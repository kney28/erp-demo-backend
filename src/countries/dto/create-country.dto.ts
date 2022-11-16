import { IsNotEmpty } from 'class-validator';
import { statusCountry } from '../entities/country.entity';

export class CreateCountryDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: statusCountry;
}
