import { IsEnum, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';
import { SocialNetworks } from '../entities/social.entity';

@Unique(['name'])
export class CreateSocialDto {
  @IsNotEmpty()
  @IsEnum(SocialNetworks)
  name: SocialNetworks;
}
