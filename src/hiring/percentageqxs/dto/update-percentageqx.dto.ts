import { PartialType } from '@nestjs/swagger'; 
import { CreatePercentageqxDto } from './create-percentageqx.dto'; 

export class UpdatePercentageqxDto extends PartialType(CreatePercentageqxDto) {} 
