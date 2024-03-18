import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity'
import { Profile } from 'src/configuration/profiles/entities/profile.entity'
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersSeeder {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Erp_modules)
    private erp_moduleRepository: Repository<Erp_modules>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(Permissions)
    private permissionRepository: Repository<Permissions>,
  ) { }
  
  async seedDefaultUser() {
    const defaultUser = await this.userRepository.findOneBy({ username: 'admin' });
    // const defaultProfile = await this.profilesRepository.findOneBy({ code: 'Administrador' });
    // const defaultPermissions = await this.permissionsRepository.findOneBy({ code: 'Administrador-CONFIGURACION-MAESTRAS-PERFIL' });
    // const defaultErp_modules = await this.erp_modulesRepository.findOneBy({ code: 'CONFIGURACION-MAESTRAS-PERFIL' });

    if (!defaultUser) {
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash('admin1234', salt);
      const profile = await this.getOrCreateProfile();
      const erp_modules = await this.getOrCreateErpModules();
      await this.getOrCreatePermissions(profile, erp_modules);
      this.userRepository.save({
        name: 'Administrador',
        username: 'admin',
        salt: salt,
        password: password,
        active: true,
        role: profile
      })
    }
  }

  async getOrCreateProfile(): Promise<Profile> {
    const defaultProfile = await this.profileRepository.findOneBy({ code: 'Administrador' });

    if (!defaultProfile) {
      return this.profileRepository.save({
        code: 'Administrador',
        description: 'Administrador del sistema',
        status: 1
      });
    } else {
      return defaultProfile;
    }
  }

  async getOrCreateErpModules() {
    const defaultErp_modules = await this.erp_moduleRepository.findOneBy({ code: 'CONFIGURACION-MAESTRAS-PERFIL' });

    if (!defaultErp_modules) {
      return this.erp_moduleRepository.save({
        code: 'CONFIGURACION-MAESTRAS-PERFIL',
        module: 'CONFIGURACION',
        menu: 'MAESTRAS',
        option: 'PERFIL'
      });
    } else {
      return defaultErp_modules;
    }
  }

  async getOrCreatePermissions(profile: Profile, erp_modules: Erp_modules) {
    const defaultPermissions = await this.permissionRepository.findOneBy({ code: 'Administrador-CONFIGURACION-MAESTRAS-PERFIL' });

    if (!defaultPermissions) {
      return this.permissionRepository.save({
        code: 'Administrador-CONFIGURACION-MAESTRAS-PERFIL',
        add : false,
        modify: true,
        record: false,
        query: true,
        remove: true,
        print: false,
        confirm: false,
        process: false,
        run: false,
        override: false,
        profile: profile,
        option: erp_modules
      });
    } else {
      return defaultPermissions;
    }
  }

}


