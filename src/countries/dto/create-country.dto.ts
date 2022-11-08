import { IsNotEmpty } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  fecha: Date;
}
