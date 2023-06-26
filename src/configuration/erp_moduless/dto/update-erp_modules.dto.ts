import { PartialType } from '@nestjs/swagger'; 
import { CreateErp_modulesDto } from './create-erp_modules.dto'; 

export class UpdateErp_modulesDto extends PartialType(CreateErp_modulesDto) {} 
