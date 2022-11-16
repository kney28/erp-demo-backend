import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum SocialNetworks {
  YOUTUBE = 'YouTube',
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter',
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'LinkedIn',
  SNAPCHAT = 'Snapchat',
  WHATSAPP = 'Whatsapp',
  GOOGLE = 'Google_+',
  MEDIUM = 'Medium',
  QUORA = 'Quora',
  PINTEREST = 'Pinterest',
  OTHER = 'Other',
}

@Entity()
@Unique(['name'])
export class Social extends BaseEntity {
  @Column({
    type: 'enum',
    enum: SocialNetworks,
  })
  name: SocialNetworks;
}
