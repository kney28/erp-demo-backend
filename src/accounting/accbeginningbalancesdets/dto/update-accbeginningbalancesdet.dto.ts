import { PartialType } from '@nestjs/swagger'; 
import { CreateAccbeginningbalancesdetDto } from './create-accbeginningbalancesdet.dto'; 

export class UpdateAccbeginningbalancesdetDto extends PartialType(CreateAccbeginningbalancesdetDto) {} 
