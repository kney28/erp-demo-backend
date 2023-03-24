import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ModeratingcopaysService } from './moderatingcopays.service'; 
import { CreateModeratingcopayDto } from './dto/create-moderatingcopay.dto'; 
import { UpdateModeratingcopayDto } from './dto/update-moderatingcopay.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Moderatingcopay } from './entities/moderatingcopay.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/moderatingcopays') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ModeratingcopaysController { 
	constructor(private readonly moderatingcopaysService: ModeratingcopaysService) {} 

	@Post() 
	create( 
		@Body() createModeratingcopayDto: CreateModeratingcopayDto, 
	): Promise<Moderatingcopay> { 
		return this.moderatingcopaysService.create(createModeratingcopayDto); 
	} 

	@Get() 
	findAll(): Promise<Moderatingcopay[]> { 
		return this.moderatingcopaysService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Moderatingcopay> { 
		return this.moderatingcopaysService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateModeratingcopayDto: UpdateModeratingcopayDto, 
	): Promise<Moderatingcopay> { 
		return this.moderatingcopaysService.update(id, updateModeratingcopayDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Moderatingcopay> { 
		return this.moderatingcopaysService.remove(id); 
	} 
}