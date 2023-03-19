import { PartialType } from '@nestjs/swagger'; 
import { CreateAccountingtermsDto } from './create-accountingterms.dto'; 

export class UpdateAccountingtermsDto extends PartialType(CreateAccountingtermsDto) {} 
