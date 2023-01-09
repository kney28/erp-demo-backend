import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import {
  SisbenLevelGroup,
  SisbenLevelStatus,
  SisbenLevelSubgroup,
  SisbenLevelType,
} from '../entities/sisbenlevel.entity';

export class CreateSisbenLevelDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(SisbenLevelType)
  sisbenlevel: SisbenLevelType;

  @IsNotEmpty()
  descriptionsisbenlevel: string;

  @IsNotEmpty()
  @IsEnum(SisbenLevelGroup)
  sisbengroup: SisbenLevelGroup;

  @IsNotEmpty()
  descriptionsisbengroup: string;

  @IsNotEmpty()
  @IsEnum(SisbenLevelSubgroup)
  sisbensubgroup: SisbenLevelSubgroup;

  @IsNotEmpty()
  descriptionsisbensubgroup: string;

  @IsNotEmpty()
  @IsEnum(SisbenLevelStatus)
  status: SisbenLevelStatus;
}
