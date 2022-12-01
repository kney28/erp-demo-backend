import { IsNotEmpty } from 'class-validator';
import { statusCountry } from 'src/countries/entities/country.entity';

export class CreateTypesSeatDto {
  @IsNotEmpty({
    message: 'El campo código es obligatorio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción es obligatorio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo número es obligatorio.',
  })
  number: number;

  @IsNotEmpty({
    message: 'El campo estado es obligatorio.',
  })
  status: statusCountry;
}
