import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  fecha: Date;
}
