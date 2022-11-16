import { IsNotEmpty } from 'class-validator';
import { statusNeighborhood } from '../entities/neighborhood.entity';
import { MunicipalityExist } from '../neighborhoods.validations';

export class CreateNeighborhoodDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @MunicipalityExist({
    message: 'El id del municipio, no existe.',
  })
  municipality: number;

  @IsNotEmpty()
  status: statusNeighborhood;
}
