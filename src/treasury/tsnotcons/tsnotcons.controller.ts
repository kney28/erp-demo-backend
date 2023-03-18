import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TsnotconsService } from './tsnotcons.service'; 
import { CreateTsnotconDto } from './dto/create-tsnotcon.dto'; 
import { UpdateTsnotconDto } from './dto/update-tsnotcon.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tsnotcon } from './entities/tsnotcon.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tsnotcons') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TsnotconsController { 
	constructor(private readonly tsnotconsService: TsnotconsService) {} 

	@Post() 
	create( 
		@Body() createTsnotconDto: CreateTsnotconDto, 
	): Promise<Tsnotcon> { 
		return this.tsnotconsService.create(createTsnotconDto); 
	} 

	@Get() 
	findAll(): Promise<Tsnotcon[]> { 
		return this.tsnotconsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tsnotcon> { 
		return this.tsnotconsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTsnotconDto: UpdateTsnotconDto, 
	): Promise<Tsnotcon> { 
		return this.tsnotconsService.update(id, updateTsnotconDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tsnotcon> { 
		return this.tsnotconsService.remove(id); 
	} 
}