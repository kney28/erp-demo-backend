import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import {
  HealthProviderClass,
  HealthProviderComplexityLevel,
  HealthProviderStatus,
} from '../entities/healthprovider.entity';

export class CreateHealthProviderDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  /*
  @IsNotEmpty()
  third: number;

  @IsNotEmpty()
  document: string;

  @IsNotEmpty()
  socialreason: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phonenumber: string;

  @IsNotEmpty()
  Neighborhood: string;

  @IsNotEmpty()
  neighborhooddescription: string;*/

  @IsNotEmpty()
  @IsEnum(HealthProviderComplexityLevel)
  complexitylevel: HealthProviderComplexityLevel;

  @IsNotEmpty()
  @IsEnum(HealthProviderClass)
  providerclass: HealthProviderClass;

  @IsNotEmpty()
  providerclassdescription: string;

  @IsNotEmpty()
  identificationlegalrepresentative: string;

  @IsNotEmpty()
  legalrepresentativename: string;

  @IsNotEmpty()
  @IsEnum(HealthProviderStatus)
  status: HealthProviderStatus;
}
