import { PartialType } from '@nestjs/swagger'; 
import { CreateHcclassanestrecordDto } from './create-hcclassanestrecord.dto'; 

export class UpdateHcclassanestrecordDto extends PartialType(CreateHcclassanestrecordDto) {} 
