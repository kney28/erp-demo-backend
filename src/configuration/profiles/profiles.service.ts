/* eslint-disable prettier/prettier */
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreatePermissionsDto } from 'src/configuration/permissionss/dto/create-permissions.dto';
import { Profile } from './entities/profile.entity';
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';
import { GlobalFuntions } from 'src/auth/global.function';

@Injectable()
export class ProfilesService {
  constructor(
    private permisos: GlobalFuntions,
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    @InjectRepository(Erp_modules)
    private erpModulesRepository: Repository<Erp_modules>,
    @InjectRepository(Permissions)
    private permissionsRepository: Repository<Permissions>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    if (this.permisos.Can('CONFIGURACION-MAESTRAS-PERFIL','add')) {
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
    } else {
      throw new BadRequestException({
        message: 'El usuario no cuenta con el nivel de acceso necesario',
        errorCode: 400
      });
    }
  }

  findAll(): Promise<Profile[]> {
    if (this.permisos.Can('CONFIGURACION-MAESTRAS-PERFIL','query')) {
      return this.profilesRepository.find();
    } else {
      throw new BadRequestException({
        message: 'El usuario no cuenta con el nivel de acceso necesario',
        error: 400
      });
    }
  }

  findOne(id: string): Promise<Profile> {
    if (this.permisos.Can('CONFIGURACION-MAESTRAS-PERFIL','query')) {
      return this.profilesRepository.findOneBy({ id });
    } else {
      throw new BadRequestException({
        message: 'El usuario no cuenta con el nivel de acceso necesario',
        errorCode: 400
      });
    }
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    if (this.permisos.Can('CONFIGURACION-MAESTRAS-PERFIL','modify')){
      const profile: Profile = await this.profilesRepository.findOneBy({
        id,
      });
      const editedProfile: Profile = Object.assign(profile, updateProfileDto);
      return await this.profilesRepository.save(editedProfile);
    } else {
      throw new BadRequestException({
        message: 'El usuario no cuenta con el nivel de acceso necesario',
        errorCode: 400
      });
    }
  }

  async remove(id: string): Promise<Profile> {
    if (this.permisos.Can('CONFIGURACION-MAESTRAS-PERFIL','remove')) {
      const profile: Profile = await this.profilesRepository.findOneBy({
        id,
      });
      return await this.profilesRepository.softRemove(profile);
    } else {
      throw new BadRequestException({
        message: 'El usuario no cuenta con el nivel de acceso necesario',
        errorCode: 400
      });
    }
  }
}
