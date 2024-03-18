/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/configuration/profiles/entities/profile.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity';
import { UsersSeeder } from './users.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Permissions, Erp_modules])],
  controllers: [UsersController],
  providers: [UsersService, UsersSeeder],
  exports: [UsersService],
})
export class UsersModule {}
