import { IsNotEmpty } from 'class-validator';
import { Municipality } from 'src/configuration/municipalities/entities/municipality.entity';
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
  municipality: Municipality;

  @IsNotEmpty()
  status: statusNeighborhood;
}
