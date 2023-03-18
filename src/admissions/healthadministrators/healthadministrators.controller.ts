import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { HealthadministratorsService } from './healthadministrators.service'; 
import { CreateHealthadministratorDto } from './dto/create-healthadministrator.dto'; 
import { UpdateHealthadministratorDto } from './dto/update-healthadministrator.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Healthadministrator } from './entities/healthadministrator.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/healthadministrators') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class HealthadministratorsController { 
	constructor(private readonly healthadministratorsService: HealthadministratorsService) {} 

	@Post() 
	create( 
		@Body() createHealthadministratorDto: CreateHealthadministratorDto, 
	): Promise<Healthadministrator> { 
		return this.healthadministratorsService.create(createHealthadministratorDto); 
	} 

	@Get() 
	findAll(): Promise<Healthadministrator[]> { 
		return this.healthadministratorsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Healthadministrator> { 
		return this.healthadministratorsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateHealthadministratorDto: UpdateHealthadministratorDto, 
	): Promise<Healthadministrator> { 
		return this.healthadministratorsService.update(id, updateHealthadministratorDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Healthadministrator> { 
		return this.healthadministratorsService.remove(id); 
	} 
}