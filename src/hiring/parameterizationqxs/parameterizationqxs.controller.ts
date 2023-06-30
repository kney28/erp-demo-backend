import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ParameterizationqxsService } from './parameterizationqxs.service'; 
import { CreateParameterizationqxDto } from './dto/create-parameterizationqx.dto'; 
import { UpdateParameterizationqxDto } from './dto/update-parameterizationqx.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Parameterizationqx } from './entities/parameterizationqx.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/parameterizationqxs') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ParameterizationqxsController { 
	constructor(private readonly parameterizationqxsService: ParameterizationqxsService) {} 

	@Post() 
	create( 
		@Body() createParameterizationqxDto: CreateParameterizationqxDto, 
	): Promise<Parameterizationqx> { 
		return this.parameterizationqxsService.create(createParameterizationqxDto); 
	} 

	@Get() 
	findAll(): Promise<Parameterizationqx[]> { 
		return this.parameterizationqxsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Parameterizationqx> { 
		return this.parameterizationqxsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateParameterizationqxDto: UpdateParameterizationqxDto, 
	): Promise<Parameterizationqx> { 
		return this.parameterizationqxsService.update(id, updateParameterizationqxDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Parameterizationqx> { 
		return this.parameterizationqxsService.remove(id); 
	} 
}