import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { Parqxdetail3sService } from './parqxdetail3s.service'; 
import { CreateParqxdetail3Dto } from './dto/create-parqxdetail3.dto'; 
import { UpdateParqxdetail3Dto } from './dto/update-parqxdetail3.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Parqxdetail3 } from './entities/parqxdetail3.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/parqxdetail3s') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class Parqxdetail3sController { 
	constructor(private readonly parqxdetail3sService: Parqxdetail3sService) {} 

	@Post() 
	create( 
		@Body() createParqxdetail3Dto: CreateParqxdetail3Dto, 
	): Promise<Parqxdetail3> { 
		return this.parqxdetail3sService.create(createParqxdetail3Dto); 
	} 

	@Get() 
	findAll(): Promise<Parqxdetail3[]> { 
		return this.parqxdetail3sService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Parqxdetail3> { 
		return this.parqxdetail3sService.findOne(id); 
	} 

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Parqxdetail3[]> { 
		return this.parqxdetail3sService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateParqxdetail3Dto: UpdateParqxdetail3Dto, 
	): Promise<Parqxdetail3> { 
		return this.parqxdetail3sService.update(id, updateParqxdetail3Dto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Parqxdetail3> { 
		return this.parqxdetail3sService.remove(id); 
	} 
}