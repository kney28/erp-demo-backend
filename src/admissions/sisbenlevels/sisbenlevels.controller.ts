import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { SisbenlevelsService } from './sisbenlevels.service'; 
import { CreateSisbenlevelDto } from './dto/create-sisbenlevel.dto'; 
import { UpdateSisbenlevelDto } from './dto/update-sisbenlevel.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Sisbenlevel } from './entities/sisbenlevel.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/sisbenlevels') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class SisbenlevelsController { 
	constructor(private readonly sisbenlevelsService: SisbenlevelsService) {} 

	@Post() 
	create( 
		@Body() createSisbenlevelDto: CreateSisbenlevelDto, 
	): Promise<Sisbenlevel> { 
		return this.sisbenlevelsService.create(createSisbenlevelDto); 
	} 

	@Get() 
	findAll(): Promise<Sisbenlevel[]> { 
		return this.sisbenlevelsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Sisbenlevel> { 
		return this.sisbenlevelsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateSisbenlevelDto: UpdateSisbenlevelDto, 
	): Promise<Sisbenlevel> { 
		return this.sisbenlevelsService.update(id, updateSisbenlevelDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Sisbenlevel> { 
		return this.sisbenlevelsService.remove(id); 
	} 
}