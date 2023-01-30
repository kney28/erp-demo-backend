import { PartialType } from '@nestjs/swagger'; 
import { CreateCategoriescupsDto } from './create-categoriescups.dto'; 

export class UpdateCategoriescupsDto extends PartialType(CreateCategoriescupsDto) {} 
