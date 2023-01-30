import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { SubgruposcupssService } from './subgruposcupss.service'; 
import { CreateSubgruposcupsDto } from './dto/create-subgruposcups.dto'; 
import { UpdateSubgruposcupsDto } from './dto/update-subgruposcups.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Subgruposcups } from './entities/subgruposcups.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/subgruposcupss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class SubgruposcupssController { 
	constructor(private readonly subgruposcupssService: SubgruposcupssService) {} 

	@Post() 
	create( 
		@Body() createSubgruposcupsDto: CreateSubgruposcupsDto, 
	): Promise<Subgruposcups> { 
		return this.subgruposcupssService.create(createSubgruposcupsDto); 
	} 

	@Get() 
	findAll(): Promise<Subgruposcups[]> { 
		return this.subgruposcupssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Subgruposcups> { 
		return this.subgruposcupssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateSubgruposcupsDto: UpdateSubgruposcupsDto, 
	): Promise<Subgruposcups> { 
		return this.subgruposcupssService.update(id, updateSubgruposcupsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Subgruposcups> { 
		return this.subgruposcupssService.remove(id); 
	} 
}