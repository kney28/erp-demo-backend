import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { FloorsService } from './floors.service'; 
import { CreateFloorDto } from './dto/create-floor.dto'; 
import { UpdateFloorDto } from './dto/update-floor.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Floor } from './entities/floor.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hospitalization/floors') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class FloorsController { 
	constructor(private readonly floorsService: FloorsService) {} 

	@Post() 
	create( 
		@Body() createFloorDto: CreateFloorDto, 
	): Promise<Floor> { 
		return this.floorsService.create(createFloorDto); 
	} 

	@Get() 
	findAll(): Promise<Floor[]> { 
		return this.floorsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Floor> { 
		return this.floorsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateFloorDto: UpdateFloorDto, 
	): Promise<Floor> { 
		return this.floorsService.update(id, updateFloorDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Floor> { 
		return this.floorsService.remove(id); 
	} 
}