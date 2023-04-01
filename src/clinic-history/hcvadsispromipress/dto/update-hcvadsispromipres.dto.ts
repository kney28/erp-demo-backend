import { PartialType } from '@nestjs/swagger'; 
import { CreateHcvadsispromipresDto } from './create-hcvadsispromipres.dto'; 

export class UpdateHcvadsispromipresDto extends PartialType(CreateHcvadsispromipresDto) {} 
