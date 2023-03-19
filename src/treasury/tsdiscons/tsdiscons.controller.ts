import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TsdisconsService } from './tsdiscons.service'; 
import { CreateTsdisconDto } from './dto/create-tsdiscon.dto'; 
import { UpdateTsdisconDto } from './dto/update-tsdiscon.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tsdiscon } from './entities/tsdiscon.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tsdiscons') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TsdisconsController { 
	constructor(private readonly tsdisconsService: TsdisconsService) {} 

	@Post() 
	create( 
		@Body() createTsdisconDto: CreateTsdisconDto, 
	): Promise<Tsdiscon> { 
		return this.tsdisconsService.create(createTsdisconDto); 
	} 

	@Get() 
	findAll(): Promise<Tsdiscon[]> { 
		return this.tsdisconsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tsdiscon> { 
		return this.tsdisconsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTsdisconDto: UpdateTsdisconDto, 
	): Promise<Tsdiscon> { 
		return this.tsdisconsService.update(id, updateTsdisconDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tsdiscon> { 
		return this.tsdisconsService.remove(id); 
	} 
}