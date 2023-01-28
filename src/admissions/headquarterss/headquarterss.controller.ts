import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { HeadquarterssService } from './headquarterss.service'; 
import { CreateHeadquartersDto } from './dto/create-headquarters.dto'; 
import { UpdateHeadquartersDto } from './dto/update-headquarters.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Headquarters } from './entities/headquarters.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/headquarters') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class HeadquarterssController { 
	constructor(private readonly headquarterssService: HeadquarterssService) {} 

	@Post() 
	create( 
		@Body() createHeadquartersDto: CreateHeadquartersDto, 
	): Promise<Headquarters> { 
		return this.headquarterssService.create(createHeadquartersDto); 
	} 

	@Get() 
	findAll(): Promise<Headquarters[]> { 
		return this.headquarterssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Headquarters> { 
		return this.headquarterssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateHeadquartersDto: UpdateHeadquartersDto, 
	): Promise<Headquarters> { 
		return this.headquarterssService.update(id, updateHeadquartersDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Headquarters> { 
		return this.headquarterssService.remove(id); 
	} 
}