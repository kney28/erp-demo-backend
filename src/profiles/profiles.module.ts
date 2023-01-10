import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { ProfileLogs } from './entities/profilelogs.entity';
import { ProfileSubscriber } from './entities/profile.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([ProfileLogs]),
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfileSubscriber],
  exports: [ProfilesService],
})
export class ProfilesModule {}
