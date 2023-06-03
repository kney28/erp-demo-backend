import { PartialType } from '@nestjs/swagger'; 
import { CreateParqxdetail2Dto } from './create-parqxdetail2.dto'; 

export class UpdateParqxdetail2Dto extends PartialType(CreateParqxdetail2Dto) {} 
