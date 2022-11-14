import { IsNotEmpty } from 'class-validator';
import { Department } from 'src/departments/entities/department.entity';

export class CreateMunicipalityDto {
  code: string;

  @IsNotEmpty()
  subcode: string;

  @IsNotEmpty()
  department: Department;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: number;
}
