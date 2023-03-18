import { PartialType } from '@nestjs/swagger'; 
import { CreateAccanncloDto } from './create-accannclo.dto'; 

export class UpdateAccanncloDto extends PartialType(CreateAccanncloDto) {} 
