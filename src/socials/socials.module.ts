import { Module } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { SocialsController } from './socials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Social } from './entities/social.entity';
import { SocialLogs } from './entities/sociallogs.entity';
import { SocialSubscriber } from './entities/social.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Social]),
    TypeOrmModule.forFeature([SocialLogs]),
  ],
  controllers: [SocialsController],
  providers: [SocialsService, SocialSubscriber],
  exports: [SocialsService],
})
export class SocialsModule {}
