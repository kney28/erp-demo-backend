import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfilesPermissionDto } from './dto/create-profiles-permission.dto';
import { UpdateProfilesPermissionDto } from './dto/update-profiles-permission.dto';
import { ProfilesPermission } from './entities/profiles-permission.entity';

@Injectable()
export class ProfilesPermissionsService {
  constructor(
    @InjectRepository(ProfilesPermission)
    private profilesPermissionRepository: Repository<ProfilesPermission>,
  ) {}

  create(
    createProfilesPermissionDto: CreateProfilesPermissionDto,
  ): Promise<ProfilesPermission> {
    const profilesPermission: ProfilesPermission =
      this.profilesPermissionRepository.create(createProfilesPermissionDto);
    return this.profilesPermissionRepository.save(profilesPermission);
  }

  findAll(): Promise<ProfilesPermission[]> {
    return this.profilesPermissionRepository.find();
  }

  findOne(id: string): Promise<ProfilesPermission> {
    return this.profilesPermissionRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateProfilesPermissionDto: UpdateProfilesPermissionDto,
  ): Promise<ProfilesPermission> {
    const profilesPermission: ProfilesPermission =
      await this.profilesPermissionRepository.findOneBy({
        id,
      });

    const editedProfilesPermission: ProfilesPermission = Object.assign(
      profilesPermission,
      updateProfilesPermissionDto,
    );

    return this.profilesPermissionRepository.save(editedProfilesPermission);
  }

  async remove(id: string): Promise<ProfilesPermission> {
    const profilesPermission: ProfilesPermission =
      await this.profilesPermissionRepository.findOneBy({
        id,
      });
    return this.profilesPermissionRepository.softRemove(profilesPermission);
  }
}
