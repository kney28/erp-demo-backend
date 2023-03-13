import { PartialType } from '@nestjs/swagger'; 
import { CreateAccbeginningbalancesDto } from './create-accbeginningbalances.dto'; 

export class UpdateAccbeginningbalancesDto extends PartialType(CreateAccbeginningbalancesDto) {} 
