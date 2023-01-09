import { IsNotEmpty, MaxLength } from 'class-validator';
import { DepartmentExistCode } from '../validations/departments.validate.unique.code';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @DepartmentExistCode({
    message: 'El código del departamento ya existe.',
  })
  @MaxLength(2, {
    message: 'El código del departamento debe tener máximo 2 caracteres',
  })
  codigo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  fecha: Date;
}
