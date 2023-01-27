import { PartialType } from '@nestjs/swagger'; 
import { CreateSpecialpopulationDto } from './create-specialpopulation.dto'; 

export class UpdateSpecialpopulationDto extends PartialType(CreateSpecialpopulationDto) {} 
