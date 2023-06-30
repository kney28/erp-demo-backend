import { IsEmpty, IsNotEmpty, MaxLength } from 'class-validator';
import { Department } from 'src/configuration/departments/entities/department.entity';
import { DepartmentExist } from 'src/configuration/departments/validations/departments.validations';
import { statusMunicipality } from '../entities/municipality.entity';

export class CreateMunicipalityDto {
  @IsEmpty()
  code: string;

  @IsNotEmpty()
  @MaxLength(3, {
    message: 'El subcódigo del municipio debe tener máximo 3 caracteres',
  })
  subcode: string;

  @IsNotEmpty()
  @DepartmentExist({
    message: 'El id del departamento, no existe.',
  })
  department: Department;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: statusMunicipality;
}
