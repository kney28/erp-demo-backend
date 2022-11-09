import { IsNotEmpty } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';

export class CreateMunicipalityDto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  subcodigo: string;

  @IsNotEmpty()
  department: Department;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  fecha: Date;
}
