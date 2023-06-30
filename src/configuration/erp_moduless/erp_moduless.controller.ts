import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { Erp_modulessService } from './erp_moduless.service'; 
import { CreateErp_modulesDto } from './dto/create-erp_modules.dto'; 
import { UpdateErp_modulesDto } from './dto/update-erp_modules.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Erp_modules } from './entities/erp_modules.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('configuration/erp_moduless') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class Erp_modulessController { 
	constructor(private readonly erp_modulessService: Erp_modulessService) {} 

	@Post() 
	create( 
		@Body() createErp_modulesDto: CreateErp_modulesDto, 
	): Promise<Erp_modules> { 
		return this.erp_modulessService.create(createErp_modulesDto); 
	} 

	@Get() 
	findAll(): Promise<Erp_modules[]> { 
		return this.erp_modulessService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Erp_modules> { 
		return this.erp_modulessService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateErp_modulesDto: UpdateErp_modulesDto, 
	): Promise<Erp_modules> { 
		return this.erp_modulessService.update(id, updateErp_modulesDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Erp_modules> { 
		return this.erp_modulessService.remove(id); 
	} 
}