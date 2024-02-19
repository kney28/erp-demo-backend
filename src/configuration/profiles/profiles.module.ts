/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';
import { ProfileLogs } from './entities/profilelogs.entity';
import { ProfileSubscriber } from './entities/profile.subscriber';
import { GlobalFuntions } from 'src/auth/global.function';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([ProfileLogs]),
    TypeOrmModule.forFeature([Erp_modules]),
    TypeOrmModule.forFeature([Permissions]),
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfileSubscriber, GlobalFuntions],
  exports: [ProfilesService],
})
export class ProfilesModule {}
