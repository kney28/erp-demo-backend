import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TsboxessService } from './tsboxess.service'; 
import { CreateTsboxesDto } from './dto/create-tsboxes.dto'; 
import { UpdateTsboxesDto } from './dto/update-tsboxes.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tsboxes } from './entities/tsboxes.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tsboxess') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TsboxessController { 
	constructor(private readonly tsboxessService: TsboxessService) {} 

	@Post() 
	create( 
		@Body() createTsboxesDto: CreateTsboxesDto, 
	): Promise<Tsboxes> { 
		return this.tsboxessService.create(createTsboxesDto); 
	} 

	@Get() 
	findAll(): Promise<Tsboxes[]> { 
		return this.tsboxessService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tsboxes> { 
		return this.tsboxessService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTsboxesDto: UpdateTsboxesDto, 
	): Promise<Tsboxes> { 
		return this.tsboxessService.update(id, updateTsboxesDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tsboxes> { 
		return this.tsboxessService.remove(id); 
	} 
}