import { PartialType } from '@nestjs/swagger'; 
import { CreateAccannualclosingentryDto } from './create-accannualclosingentry.dto'; 

export class UpdateAccannualclosingentryDto extends PartialType(CreateAccannualclosingentryDto) {} 
