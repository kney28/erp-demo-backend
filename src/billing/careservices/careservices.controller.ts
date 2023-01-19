import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { CareservicesService } from './careservices.service'; 
import { CreateCareserviceDto } from './dto/create-careservice.dto'; 
import { UpdateCareserviceDto } from './dto/update-careservice.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Careservice } from './entities/careservice.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('billing/careservices') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class CareservicesController { 
	constructor(private readonly careservicesService: CareservicesService) {} 

	@Post() 
	create( 
		@Body() createCareserviceDto: CreateCareserviceDto, 
	): Promise<Careservice> { 
		return this.careservicesService.create(createCareserviceDto); 
	} 

	@Get() 
	findAll(): Promise<Careservice[]> { 
		return this.careservicesService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Careservice> { 
		return this.careservicesService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateCareserviceDto: UpdateCareserviceDto, 
	): Promise<Careservice> { 
		return this.careservicesService.update(id, updateCareserviceDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Careservice> { 
		return this.careservicesService.remove(id); 
	} 
}