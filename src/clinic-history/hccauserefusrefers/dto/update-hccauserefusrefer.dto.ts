import { PartialType } from '@nestjs/swagger'; 
import { CreateHccauserefusreferDto } from './create-hccauserefusrefer.dto'; 

export class UpdateHccauserefusreferDto extends PartialType(CreateHccauserefusreferDto) {} 
