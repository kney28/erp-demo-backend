import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { RequirementslistdetsService } from './requirementslistdets.service'; 
import { CreateRequirementslistdetDto } from './dto/create-requirementslistdet.dto'; 
import { UpdateRequirementslistdetDto } from './dto/update-requirementslistdet.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Requirementslistdet } from './entities/requirementslistdet.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/requirementslistdets') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class RequirementslistdetsController { 
	constructor(private readonly requirementslistdetsService: RequirementslistdetsService) {} 

	@Post() 
	create( 
		@Body() createRequirementslistdetDto: CreateRequirementslistdetDto, 
	): Promise<Requirementslistdet> { 
		return this.requirementslistdetsService.create(createRequirementslistdetDto); 
	} 

	@Get() 
	findAll(): Promise<Requirementslistdet[]> { 
		return this.requirementslistdetsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Requirementslistdet> { 
		return this.requirementslistdetsService.findOne(id); 
	} 

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Requirementslistdet[]> { 
		return this.requirementslistdetsService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateRequirementslistdetDto: UpdateRequirementslistdetDto, 
	): Promise<Requirementslistdet> { 
		return this.requirementslistdetsService.update(id, updateRequirementslistdetDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Requirementslistdet> { 
		return this.requirementslistdetsService.remove(id); 
	} 
}
