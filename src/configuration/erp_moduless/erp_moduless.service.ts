import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateErp_modulesDto } from './dto/create-erp_modules.dto'; 
import { UpdateErp_modulesDto } from './dto/update-erp_modules.dto';
import { CreatePermissionsDto } from 'src/configuration/permissionss/dto/create-permissions.dto';
import { Erp_modules } from './entities/erp_modules.entity'; 
import { Profile } from 'src/configuration/profiles/entities/profile.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';

@Injectable() 
export class Erp_modulessService { 
	constructor( 
		@InjectRepository(Erp_modules) 
		private erp_modulessRepository: Repository<Erp_modules>, 
		@InjectRepository(Profile)
    	private profilesRepository: Repository<Profile>,
		@InjectRepository(Permissions)
    	private permissionsRepository: Repository<Permissions>,
	) {} 

	async create(createErp_modulesDto: CreateErp_modulesDto): Promise<Erp_modules> { 
		const erp_modules: Erp_modules = this.erp_modulessRepository.create(createErp_modulesDto); 
		const resp = await this.erp_modulessRepository.save(erp_modules);
		const profiles: Profile[] = await this.profilesRepository.find();
		for (let i = 0; i < profiles.length; i++) {
			// const element = profiles[i];
			const permissionDto : CreatePermissionsDto = {
				code: profiles[i].code + '-' + erp_modules.code,
				profile: profiles[i],
				option: erp_modules,
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

	findAll(): Promise<Erp_modules[]> { 
		return this.erp_modulessRepository.find(); 
	} 

	findOne(id: string): Promise<Erp_modules> { 
		return this.erp_modulessRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updateErp_modulesDto: UpdateErp_modulesDto, 
	): Promise<Erp_modules> { 
		const erp_modules: Erp_modules = await this.erp_modulessRepository.findOneBy({ 
			id, 
		}); 
		const editedErp_modules: Erp_modules = Object.assign( 
			erp_modules, 
			updateErp_modulesDto, 
		); 
		return await this.erp_modulessRepository.save(editedErp_modules); 
	} 

	async remove(id: string): Promise<Erp_modules> { 
		const erp_modules: Erp_modules = await this.erp_modulessRepository.findOneBy({ 
			id, 
		}); 
		return await this.erp_modulessRepository.softRemove(erp_modules); 
	} 
}