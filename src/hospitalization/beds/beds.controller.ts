import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { BedsService } from './beds.service'; 
import { CreateBedDto } from './dto/create-bed.dto'; 
import { UpdateBedDto } from './dto/update-bed.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Bed } from './entities/bed.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hospitalization/beds') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class BedsController { 
	constructor(private readonly bedsService: BedsService) {} 

	@Post() 
	create( 
		@Body() createBedDto: CreateBedDto, 
	): Promise<Bed> { 
		return this.bedsService.create(createBedDto); 
	} 

	@Get() 
	findAll(): Promise<Bed[]> { 
		return this.bedsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Bed> { 
		return this.bedsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateBedDto: UpdateBedDto, 
	): Promise<Bed> { 
		return this.bedsService.update(id, updateBedDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Bed> { 
		return this.bedsService.remove(id); 
	} 
}