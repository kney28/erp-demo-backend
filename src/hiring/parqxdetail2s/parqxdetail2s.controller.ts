import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { Parqxdetail2sService } from './parqxdetail2s.service'; 
import { CreateParqxdetail2Dto } from './dto/create-parqxdetail2.dto'; 
import { UpdateParqxdetail2Dto } from './dto/update-parqxdetail2.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Parqxdetail2 } from './entities/parqxdetail2.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/parqxdetail2s') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class Parqxdetail2sController { 
	constructor(private readonly parqxdetail2sService: Parqxdetail2sService) {} 

	@Post() 
	create( 
		@Body() createParqxdetail2Dto: CreateParqxdetail2Dto, 
	): Promise<Parqxdetail2> { 
		return this.parqxdetail2sService.create(createParqxdetail2Dto); 
	} 

	@Get() 
	findAll(): Promise<Parqxdetail2[]> { 
		return this.parqxdetail2sService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Parqxdetail2> { 
		return this.parqxdetail2sService.findOne(id); 
	}

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Parqxdetail2[]> { 
		return this.parqxdetail2sService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateParqxdetail2Dto: UpdateParqxdetail2Dto, 
	): Promise<Parqxdetail2> { 
		return this.parqxdetail2sService.update(id, updateParqxdetail2Dto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Parqxdetail2> { 
		return this.parqxdetail2sService.remove(id); 
	} 
}