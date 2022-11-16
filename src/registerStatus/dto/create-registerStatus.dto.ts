import { IsEnum, IsNotEmpty } from 'class-validator';
import { RegisterStatusType } from '../entities/registerStatus.entity';

export class CreateRegisterStatusDto {
  @IsNotEmpty()
  @IsEnum(RegisterStatusType)
  name: RegisterStatusType;
}
