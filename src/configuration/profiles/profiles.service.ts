import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreatePermissionsDto } from 'src/configuration/permissionss/dto/create-permissions.dto';
import { Profile } from './entities/profile.entity';
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    @InjectRepository(Erp_modules)
    private erpModulesRepository: Repository<Erp_modules>,
    @InjectRepository(Permissions)
    private permissionsRepository: Repository<Permissions>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile: Profile = this.profilesRepository.create(createProfileDto);
    const resp = await this.profilesRepository.save(profile);
    const modules: Erp_modules[] = await this.erpModulesRepository.find();
    for (let i = 0; i < modules.length; i++) {
      // const element = modules[i];
      const permissionDto : CreatePermissionsDto = {
        code: profile.code + '-' + modules[i].code,
        profile: profile,
        option: modules[i],
        add: false,
        modify: false,
        record: false,
        query: false,
        remove: false,
        print: false,
        confirm: false,
        process: false,
        run: false,
        override: false
      };

      const permission: Permissions = this.permissionsRepository.create(permissionDto);

      await this.permissionsRepository.save(permission);
    }
    return resp;
  }

  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  findOne(id: string): Promise<Profile> {
    return this.profilesRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile: Profile = await this.profilesRepository.findOneBy({
      id,
    });
    const editedProfile: Profile = Object.assign(profile, updateProfileDto);
    return await this.profilesRepository.save(editedProfile);
  }

  async remove(id: string): Promise<Profile> {
    const profile: Profile = await this.profilesRepository.findOneBy({
      id,
    });
    return await this.profilesRepository.softRemove(profile);
  }
}
