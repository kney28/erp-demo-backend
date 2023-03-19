import { PartialType } from '@nestjs/swagger'; 
import { CreateAccountingentriesDto } from './create-accountingentries.dto'; 

export class UpdateAccountingentriesDto extends PartialType(CreateAccountingentriesDto) {} 
