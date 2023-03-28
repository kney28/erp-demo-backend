import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PretypincsService } from './pretypincs.service'; 
import { CreatePretypincDto } from './dto/create-pretypinc.dto'; 
import { UpdatePretypincDto } from './dto/update-pretypinc.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Pretypinc } from './entities/pretypinc.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('pretypincs') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PretypincsController { 
	constructor(private readonly pretypincsService: PretypincsService) {} 

	@Post() 
	create( 
		@Body() createPretypincDto: CreatePretypincDto, 
	): Promise<Pretypinc> { 
		return this.pretypincsService.create(createPretypincDto); 
	} 

	@Get() 
	findAll(): Promise<Pretypinc[]> { 
		return this.pretypincsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Pretypinc> { 
		return this.pretypincsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePretypincDto: UpdatePretypincDto, 
	): Promise<Pretypinc> { 
		return this.pretypincsService.update(id, updatePretypincDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Pretypinc> { 
		return this.pretypincsService.remove(id); 
	} 
}