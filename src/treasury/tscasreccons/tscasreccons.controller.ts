import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TscasrecconsService } from './tscasreccons.service'; 
import { CreateTscasrecconDto } from './dto/create-tscasreccon.dto'; 
import { UpdateTscasrecconDto } from './dto/update-tscasreccon.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tscasreccon } from './entities/tscasreccon.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tscasreccons') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TscasrecconsController { 
	constructor(private readonly tscasrecconsService: TscasrecconsService) {} 

	@Post() 
	create( 
		@Body() createTscasrecconDto: CreateTscasrecconDto, 
	): Promise<Tscasreccon> { 
		return this.tscasrecconsService.create(createTscasrecconDto); 
	} 

	@Get() 
	findAll(): Promise<Tscasreccon[]> { 
		return this.tscasrecconsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tscasreccon> { 
		return this.tscasrecconsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTscasrecconDto: UpdateTscasrecconDto, 
	): Promise<Tscasreccon> { 
		return this.tscasrecconsService.update(id, updateTscasrecconDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tscasreccon> { 
		return this.tscasrecconsService.remove(id); 
	} 
}