import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ParameterizationcupssService } from './parameterizationcupss.service'; 
import { CreateParameterizationcupsDto } from './dto/create-parameterizationcups.dto'; 
import { UpdateParameterizationcupsDto } from './dto/update-parameterizationcups.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Parameterizationcups } from './entities/parameterizationcups.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/parameterizationcupss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ParameterizationcupssController { 
	constructor(private readonly parameterizationcupssService: ParameterizationcupssService) {} 

	@Post() 
	create( 
		@Body() createParameterizationcupsDto: CreateParameterizationcupsDto, 
	): Promise<Parameterizationcups> { 
		return this.parameterizationcupssService.create(createParameterizationcupsDto); 
	} 

	@Get() 
	findAll(): Promise<Parameterizationcups[]> { 
		return this.parameterizationcupssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Parameterizationcups> { 
		return this.parameterizationcupssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateParameterizationcupsDto: UpdateParameterizationcupsDto, 
	): Promise<Parameterizationcups> { 
		return this.parameterizationcupssService.update(id, updateParameterizationcupsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Parameterizationcups> { 
		return this.parameterizationcupssService.remove(id); 
	} 
}