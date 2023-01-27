import { PartialType } from '@nestjs/swagger'; 
import { CreateHolidaysDto } from './create-holidays.dto'; 

export class UpdateHolidaysDto extends PartialType(CreateHolidaysDto) {} 
