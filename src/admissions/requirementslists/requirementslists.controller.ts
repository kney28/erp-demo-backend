import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { RequirementslistsService } from './requirementslists.service'; 
import { CreateRequirementslistDto } from './dto/create-requirementslist.dto'; 
import { UpdateRequirementslistDto } from './dto/update-requirementslist.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Requirementslist } from './entities/requirementslist.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/requirementslists') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class RequirementslistsController { 
	constructor(private readonly requirementslistsService: RequirementslistsService) {} 

	@Post() 
	create( 
		@Body() createRequirementslistDto: CreateRequirementslistDto, 
	): Promise<Requirementslist> { 
		return this.requirementslistsService.create(createRequirementslistDto); 
	} 

	@Get() 
	findAll(): Promise<Requirementslist[]> { 
		return this.requirementslistsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Requirementslist> { 
		return this.requirementslistsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateRequirementslistDto: UpdateRequirementslistDto, 
	): Promise<Requirementslist> { 
		return this.requirementslistsService.update(id, updateRequirementslistDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Requirementslist> { 
		return this.requirementslistsService.remove(id); 
	} 
}
