import { PartialType } from '@nestjs/swagger'; 
import { CreateAccountingentriesdetDto } from './create-accountingentriesdet.dto'; 

export class UpdateAccountingentriesdetDto extends PartialType(CreateAccountingentriesdetDto) {} 
