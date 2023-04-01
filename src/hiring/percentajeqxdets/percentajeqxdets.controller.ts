import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PercentajeqxdetsService } from './percentajeqxdets.service'; 
import { CreatePercentajeqxdetDto } from './dto/create-percentajeqxdet.dto'; 
import { UpdatePercentajeqxdetDto } from './dto/update-percentajeqxdet.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Percentajeqxdet } from './entities/percentajeqxdet.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/percentajeqxdets') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PercentajeqxdetsController { 
	constructor(private readonly percentajeqxdetsService: PercentajeqxdetsService) {} 

	@Post() 
	create( 
		@Body() createPercentajeqxdetDto: CreatePercentajeqxdetDto, 
	): Promise<Percentajeqxdet> { 
		return this.percentajeqxdetsService.create(createPercentajeqxdetDto); 
	} 

	@Get() 
	findAll(): Promise<Percentajeqxdet[]> { 
		return this.percentajeqxdetsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Percentajeqxdet> { 
		return this.percentajeqxdetsService.findOne(id); 
	}

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Percentajeqxdet[]> { 
		return this.percentajeqxdetsService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePercentajeqxdetDto: UpdatePercentajeqxdetDto, 
	): Promise<Percentajeqxdet> { 
		return this.percentajeqxdetsService.update(id, updatePercentajeqxdetDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Percentajeqxdet> { 
		return this.percentajeqxdetsService.remove(id); 
	} 
}