import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { ProfilesStatus } from '../entities/profile.entity';

export class CreateProfileDto {
  @IsNotEmpty()
  @Unique(['code'])
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(ProfilesStatus)
  status: ProfilesStatus;
}
