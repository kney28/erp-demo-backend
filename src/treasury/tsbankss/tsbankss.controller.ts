import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TsbankssService } from './tsbankss.service'; 
import { CreateTsbanksDto } from './dto/create-tsbanks.dto'; 
import { UpdateTsbanksDto } from './dto/update-tsbanks.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tsbanks } from './entities/tsbanks.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tsbankss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TsbankssController { 
	constructor(private readonly tsbankssService: TsbankssService) {} 

	@Post() 
	create( 
		@Body() createTsbanksDto: CreateTsbanksDto, 
	): Promise<Tsbanks> { 
		return this.tsbankssService.create(createTsbanksDto); 
	} 

	@Get() 
	findAll(): Promise<Tsbanks[]> { 
		return this.tsbankssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tsbanks> { 
		return this.tsbankssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTsbanksDto: UpdateTsbanksDto, 
	): Promise<Tsbanks> { 
		return this.tsbankssService.update(id, updateTsbanksDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tsbanks> { 
		return this.tsbankssService.remove(id); 
	} 
}