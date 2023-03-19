import { PartialType } from '@nestjs/swagger'; 
import { CreateAcccostcentersDto } from './create-acccostcenters.dto'; 

export class UpdateAcccostcentersDto extends PartialType(CreateAcccostcentersDto) {} 
