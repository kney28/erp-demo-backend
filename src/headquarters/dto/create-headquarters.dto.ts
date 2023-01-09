import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { HeadquartersStatus } from '../entities/headquarters.entity';

export class CreateHeadquartersDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;
  /*
  @IsNotEmpty()
  diannumbering: number;

  @IsNotEmpty()
  diannumberingdescription: string;

  @IsNotEmpty()
  healthprovider: number;

  @IsNotEmpty()
  healthproviderdescription: string;
  */
  @IsNotEmpty()
  enablecode: string;
  /*
  @IsNotEmpty()
  accountcancellationpreviousvalidity: number;

  @IsNotEmpty()
  accountsdescription: string;
  */
  @IsNotEmpty()
  @IsEnum(HeadquartersStatus)
  status: HeadquartersStatus;
}
