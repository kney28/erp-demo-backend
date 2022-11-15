import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import {
  ThirdPersonDocumentType,
  ThirdPersonNature,
  ThirdPersonStatus,
} from '../entities/thirdPerson.entity';
export class CreateThirdPersonDto {
  @IsNotEmpty()
  socialreason: string;

  @IsNotEmpty()
  @Unique(['document'])
  document: string;

  @IsNotEmpty()
  @IsEnum(ThirdPersonDocumentType)
  documenttype: ThirdPersonDocumentType;

  @IsNotEmpty()
  @IsEnum(ThirdPersonNature)
  legalnature: ThirdPersonNature;

  @IsNotEmpty()
  @IsEnum(ThirdPersonStatus)
  status: ThirdPersonStatus;

  @IsNotEmpty()
  firstname: string;

  secondname: string;

  @IsNotEmpty()
  firstsurname: string;

  @IsNotEmpty()
  secondsurname: string;
}
