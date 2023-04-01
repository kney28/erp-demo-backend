import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { HealthservicesService } from './healthservices.service'; 
import { CreateHealthserviceDto } from './dto/create-healthservice.dto'; 
import { UpdateHealthserviceDto } from './dto/update-healthservice.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Healthservice } from './entities/healthservice.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/healthservices') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class HealthservicesController { 
	constructor(private readonly healthservicesService: HealthservicesService) {} 

	@Post() 
	create( 
		@Body() createHealthserviceDto: CreateHealthserviceDto, 
	): Promise<Healthservice> { 
		return this.healthservicesService.create(createHealthserviceDto); 
	} 

	@Get() 
	findAll(): Promise<Healthservice[]> { 
		return this.healthservicesService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Healthservice> { 
		return this.healthservicesService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateHealthserviceDto: UpdateHealthserviceDto, 
	): Promise<Healthservice> { 
		return this.healthservicesService.update(id, updateHealthserviceDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Healthservice> { 
		return this.healthservicesService.remove(id); 
	} 
}