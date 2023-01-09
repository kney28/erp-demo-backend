import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Unique } from 'typeorm';
import {
  ThirdPersonDocumentType,
  ThirdPersonNature,
  ThirdPersonStatus,
} from '../entities/third-person.entity';

export class CreateThirdPersonDto {
  @IsOptional()
  socialreason: string;

  @IsNotEmpty()
  @Unique(['document'])
  document: string;

  @IsNotEmpty()
  @IsEnum(ThirdPersonDocumentType)
  documenttype: ThirdPersonDocumentType;

  @IsOptional()
  firstname: string;

  @IsOptional()
  secondname: string;

  @IsOptional()
  firstsurname: string;

  @IsOptional()
  secondsurname: string;

  @IsNotEmpty()
  @IsEnum(ThirdPersonNature)
  nature: ThirdPersonNature;

  @IsNotEmpty()
  @IsEnum(ThirdPersonStatus)
  status: ThirdPersonStatus;
}
