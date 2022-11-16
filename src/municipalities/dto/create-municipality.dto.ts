import { IsNotEmpty } from 'class-validator';
import { DepartmentExist } from 'src/departments/departments.validations';
import { statusMunicipality } from '../entities/municipality.entity';

export class CreateMunicipalityDto {
  @IsNotEmpty()
  subcode: string;

  @IsNotEmpty()
  @DepartmentExist({
    message: 'El id del departamento, no existe.',
  })
  department: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: statusMunicipality;
}
