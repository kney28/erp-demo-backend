import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfilesPermissionsService } from './profiles-permissions.service';
import { CreateProfilesPermissionDto } from './dto/create-profiles-permission.dto';
import { UpdateProfilesPermissionDto } from './dto/update-profiles-permission.dto';
import { ProfilesPermission } from './entities/profiles-permission.entity';

@Controller('profiles-permissions')
export class ProfilesPermissionsController {
  constructor(
    private readonly profilesPermissionsService: ProfilesPermissionsService,
  ) {}

  @Post()
  create(
    @Body() createProfilesPermissionDto: CreateProfilesPermissionDto,
  ): Promise<ProfilesPermission> {
    return this.profilesPermissionsService.create(createProfilesPermissionDto);
  }

  @Get()
  findAll(): Promise<ProfilesPermission[]> {
    return this.profilesPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProfilesPermission> {
    return this.profilesPermissionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfilesPermissionDto: UpdateProfilesPermissionDto,
  ): Promise<ProfilesPermission> {
    return this.profilesPermissionsService.update(
      id,
      updateProfilesPermissionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ProfilesPermission> {
    return this.profilesPermissionsService.remove(id);
  }
}
