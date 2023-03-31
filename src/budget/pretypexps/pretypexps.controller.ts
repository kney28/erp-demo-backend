import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PretypexpsService } from './pretypexps.service'; 
import { CreatePretypexpDto } from './dto/create-pretypexp.dto'; 
import { UpdatePretypexpDto } from './dto/update-pretypexp.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Pretypexp } from './entities/pretypexp.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('pretypexps') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PretypexpsController { 
	constructor(private readonly pretypexpsService: PretypexpsService) {} 

	@Post() 
	create( 
		@Body() createPretypexpDto: CreatePretypexpDto, 
	): Promise<Pretypexp> { 
		return this.pretypexpsService.create(createPretypexpDto); 
	} 

	@Get() 
	findAll(): Promise<Pretypexp[]> { 
		return this.pretypexpsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Pretypexp> { 
		return this.pretypexpsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePretypexpDto: UpdatePretypexpDto, 
	): Promise<Pretypexp> { 
		return this.pretypexpsService.update(id, updatePretypexpDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Pretypexp> { 
		return this.pretypexpsService.remove(id); 
	} 
}