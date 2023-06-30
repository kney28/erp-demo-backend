import { PartialType } from '@nestjs/swagger'; 
import { CreateParqxdetail1Dto } from './create-parqxdetail1.dto'; 

export class UpdateParqxdetail1Dto extends PartialType(CreateParqxdetail1Dto) {} 
