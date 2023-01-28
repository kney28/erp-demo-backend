import { PartialType } from '@nestjs/swagger'; 
import { CreateGroundsdenialcareDto } from './create-groundsdenialcare.dto'; 

export class UpdateGroundsdenialcareDto extends PartialType(CreateGroundsdenialcareDto) {} 
