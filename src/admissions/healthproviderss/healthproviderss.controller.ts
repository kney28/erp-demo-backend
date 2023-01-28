import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { HealthproviderssService } from './healthproviderss.service'; 
import { CreateHealthprovidersDto } from './dto/create-healthproviders.dto'; 
import { UpdateHealthprovidersDto } from './dto/update-healthproviders.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Healthproviders } from './entities/healthproviders.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/healthproviders') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class HealthproviderssController { 
	constructor(private readonly healthproviderssService: HealthproviderssService) {} 

	@Post() 
	create( 
		@Body() createHealthprovidersDto: CreateHealthprovidersDto, 
	): Promise<Healthproviders> { 
		return this.healthproviderssService.create(createHealthprovidersDto); 
	} 

	@Get() 
	findAll(): Promise<Healthproviders[]> { 
		return this.healthproviderssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Healthproviders> { 
		return this.healthproviderssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateHealthprovidersDto: UpdateHealthprovidersDto, 
	): Promise<Healthproviders> { 
		return this.healthproviderssService.update(id, updateHealthprovidersDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Healthproviders> { 
		return this.healthproviderssService.remove(id); 
	} 
}