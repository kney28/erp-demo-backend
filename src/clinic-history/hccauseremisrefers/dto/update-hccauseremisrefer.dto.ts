import { PartialType } from '@nestjs/swagger'; 
import { CreateHccauseremisreferDto } from './create-hccauseremisrefer.dto'; 

export class UpdateHccauseremisreferDto extends PartialType(CreateHccauseremisreferDto) {} 
