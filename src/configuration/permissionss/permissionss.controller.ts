import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PermissionssService } from './permissionss.service'; 
import { CreatePermissionsDto } from './dto/create-permissions.dto'; 
import { UpdatePermissionsDto } from './dto/update-permissions.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Permissions } from './entities/permissions.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('configuration/permissionss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PermissionssController { 
	constructor(private readonly permissionssService: PermissionssService) {} 

	@Post() 
	create( 
		@Body() createPermissionsDto: CreatePermissionsDto, 
	): Promise<Permissions> { 
		return this.permissionssService.create(createPermissionsDto); 
	} 

	@Get() 
	findAll(): Promise<Permissions[]> { 
		return this.permissionssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Permissions> { 
		return this.permissionssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePermissionsDto: UpdatePermissionsDto, 
	): Promise<Permissions> { 
		return this.permissionssService.update(id, updatePermissionsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Permissions> { 
		return this.permissionssService.remove(id); 
	} 
}