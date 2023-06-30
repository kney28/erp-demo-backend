import { Module } from '@nestjs/common';
import { ProfilesPermissionsService } from './profiles-permissions.service';
import { ProfilesPermissionsController } from './profiles-permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesPermission } from './entities/profiles-permission.entity';
import { ProfilesPermissionSubscriber } from './entities/profiles-permission.subscriber';
import { ProfilesPermissionLogs } from './entities/profiles-permission-logs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfilesPermission]),
    TypeOrmModule.forFeature([ProfilesPermissionLogs]),
  ],
  controllers: [ProfilesPermissionsController],
  providers: [ProfilesPermissionsService, ProfilesPermissionSubscriber],
  exports: [ProfilesPermissionsService],
})
export class ProfilesPermissionsModule {}
