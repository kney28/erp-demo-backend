import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { GroundsdenialcaresService } from './groundsdenialcares.service'; 
import { CreateGroundsdenialcareDto } from './dto/create-groundsdenialcare.dto'; 
import { UpdateGroundsdenialcareDto } from './dto/update-groundsdenialcare.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Groundsdenialcare } from './entities/groundsdenialcare.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/groundsdenialcares') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class GroundsdenialcaresController { 
	constructor(private readonly groundsdenialcaresService: GroundsdenialcaresService) {} 

	@Post() 
	create( 
		@Body() createGroundsdenialcareDto: CreateGroundsdenialcareDto, 
	): Promise<Groundsdenialcare> { 
		return this.groundsdenialcaresService.create(createGroundsdenialcareDto); 
	} 

	@Get() 
	findAll(): Promise<Groundsdenialcare[]> { 
		return this.groundsdenialcaresService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Groundsdenialcare> { 
		return this.groundsdenialcaresService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateGroundsdenialcareDto: UpdateGroundsdenialcareDto, 
	): Promise<Groundsdenialcare> { 
		return this.groundsdenialcaresService.update(id, updateGroundsdenialcareDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Groundsdenialcare> { 
		return this.groundsdenialcaresService.remove(id); 
	} 
}