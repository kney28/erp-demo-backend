import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ModeratingcopaysdetsService } from './moderatingcopaysdets.service'; 
import { CreateModeratingcopaysdetDto } from './dto/create-moderatingcopaysdet.dto'; 
import { UpdateModeratingcopaysdetDto } from './dto/update-moderatingcopaysdet.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Moderatingcopaysdet } from './entities/moderatingcopaysdet.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/moderatingcopaysdets') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ModeratingcopaysdetsController { 
	constructor(private readonly moderatingcopaysdetsService: ModeratingcopaysdetsService) {} 

	@Post() 
	create( 
		@Body() createModeratingcopaysdetDto: CreateModeratingcopaysdetDto, 
	): Promise<Moderatingcopaysdet> { 
		return this.moderatingcopaysdetsService.create(createModeratingcopaysdetDto); 
	} 

	@Get() 
	findAll(): Promise<Moderatingcopaysdet[]> { 
		return this.moderatingcopaysdetsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Moderatingcopaysdet> { 
		return this.moderatingcopaysdetsService.findOne(id); 
	} 

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Moderatingcopaysdet[]> { 
		return this.moderatingcopaysdetsService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateModeratingcopaysdetDto: UpdateModeratingcopaysdetDto, 
	): Promise<Moderatingcopaysdet> { 
		return this.moderatingcopaysdetsService.update(id, updateModeratingcopaysdetDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Moderatingcopaysdet> { 
		return this.moderatingcopaysdetsService.remove(id); 
	} 
}