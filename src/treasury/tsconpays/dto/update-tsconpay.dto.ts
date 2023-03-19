import { PartialType } from '@nestjs/swagger'; 
import { CreateTsconpayDto } from './create-tsconpay.dto'; 

export class UpdateTsconpayDto extends PartialType(CreateTsconpayDto) {} 
