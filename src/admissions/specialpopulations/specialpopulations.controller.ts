import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { SpecialpopulationsService } from './specialpopulations.service'; 
import { CreateSpecialpopulationDto } from './dto/create-specialpopulation.dto'; 
import { UpdateSpecialpopulationDto } from './dto/update-specialpopulation.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Specialpopulation } from './entities/specialpopulation.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/specialpopulations') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class SpecialpopulationsController { 
	constructor(private readonly specialpopulationsService: SpecialpopulationsService) {} 

	@Post() 
	create( 
		@Body() createSpecialpopulationDto: CreateSpecialpopulationDto, 
	): Promise<Specialpopulation> { 
		return this.specialpopulationsService.create(createSpecialpopulationDto); 
	} 

	@Get() 
	findAll(): Promise<Specialpopulation[]> { 
		return this.specialpopulationsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Specialpopulation> { 
		return this.specialpopulationsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateSpecialpopulationDto: UpdateSpecialpopulationDto, 
	): Promise<Specialpopulation> { 
		return this.specialpopulationsService.update(id, updateSpecialpopulationDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Specialpopulation> { 
		return this.specialpopulationsService.remove(id); 
	} 
}