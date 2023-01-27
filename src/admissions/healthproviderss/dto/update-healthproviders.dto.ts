import { PartialType } from '@nestjs/swagger'; 
import { CreateHealthprovidersDto } from './create-healthproviders.dto'; 

export class UpdateHealthprovidersDto extends PartialType(CreateHealthprovidersDto) {} 
