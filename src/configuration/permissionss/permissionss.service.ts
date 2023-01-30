import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreatePermissionsDto } from './dto/create-permissions.dto'; 
import { UpdatePermissionsDto } from './dto/update-permissions.dto'; 
import { Permissions } from './entities/permissions.entity'; 

@Injectable() 
export class PermissionssService { 
	constructor( 
		@InjectRepository(Permissions) 
		private permissionssRepository: Repository<Permissions>, 
	) {} 

	async create(createPermissionsDto: CreatePermissionsDto): Promise<Permissions> { 
		const permissions: Permissions = 
			this.permissionssRepository.create(createPermissionsDto); 
		return await this.permissionssRepository.save(permissions); 
	} 

	findAll(): Promise<Permissions[]> { 
		return this.permissionssRepository.find(); 
	} 

	findOne(id: string): Promise<Permissions> { 
		return this.permissionssRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updatePermissionsDto: UpdatePermissionsDto, 
	): Promise<Permissions> { 
		const permissions: Permissions = await this.permissionssRepository.findOneBy({ 
			id, 
		}); 
		const editedPermissions: Permissions = Object.assign( 
			permissions, 
			updatePermissionsDto, 
		); 
		return await this.permissionssRepository.save(editedPermissions); 
	} 

	async remove(id: string): Promise<Permissions> { 
		const permissions: Permissions = await this.permissionssRepository.findOneBy({ 
			id, 
		}); 
		return await this.permissionssRepository.softRemove(permissions); 
	} 
}