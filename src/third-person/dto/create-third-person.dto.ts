import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Unique } from 'typeorm';
import {
  ThirdPersonDocumentType,
  ThirdPersonNature,
  ThirdPersonStatus,
} from '../entities/third-person.entity';

export class CreateThirdPersonDto {
  @IsNotEmpty()
  @IsEnum(ThirdPersonDocumentType)
  documenttype: ThirdPersonDocumentType;

  @IsNotEmpty()
  @Unique(['document'])
  document: string;

  @IsOptional()
  socialreason: string;

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
