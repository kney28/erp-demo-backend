import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { EntitytemplatesService } from './entitytemplates.service'; 
import { CreateEntitytemplateDto } from './dto/create-entitytemplate.dto'; 
import { UpdateEntitytemplateDto } from './dto/update-entitytemplate.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Entitytemplate } from './entities/entitytemplate.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/entitytemplates') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class EntitytemplatesController { 
	constructor(private readonly entitytemplatesService: EntitytemplatesService) {} 

	@Post() 
	create( 
		@Body() createEntitytemplateDto: CreateEntitytemplateDto, 
	): Promise<Entitytemplate> { 
		return this.entitytemplatesService.create(createEntitytemplateDto); 
	} 

	@Get() 
	findAll(): Promise<Entitytemplate[]> { 
		return this.entitytemplatesService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Entitytemplate> { 
		return this.entitytemplatesService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateEntitytemplateDto: UpdateEntitytemplateDto, 
	): Promise<Entitytemplate> { 
		return this.entitytemplatesService.update(id, updateEntitytemplateDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Entitytemplate> { 
		return this.entitytemplatesService.remove(id); 
	} 
}