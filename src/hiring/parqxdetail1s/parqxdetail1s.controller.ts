import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { Parqxdetail1sService } from './parqxdetail1s.service'; 
import { CreateParqxdetail1Dto } from './dto/create-parqxdetail1.dto'; 
import { UpdateParqxdetail1Dto } from './dto/update-parqxdetail1.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Parqxdetail1 } from './entities/parqxdetail1.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/parqxdetail1s') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class Parqxdetail1sController { 
	constructor(private readonly parqxdetail1sService: Parqxdetail1sService) {} 

	@Post() 
	create( 
		@Body() createParqxdetail1Dto: CreateParqxdetail1Dto, 
	): Promise<Parqxdetail1> { 
		return this.parqxdetail1sService.create(createParqxdetail1Dto); 
	} 

	@Get() 
	findAll(): Promise<Parqxdetail1[]> { 
		return this.parqxdetail1sService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Parqxdetail1> { 
		return this.parqxdetail1sService.findOne(id); 
	} 

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: number): Promise<Parqxdetail1[]> { 
		return this.parqxdetail1sService.findAllByHead(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateParqxdetail1Dto: UpdateParqxdetail1Dto, 
	): Promise<Parqxdetail1> { 
		return this.parqxdetail1sService.update(id, updateParqxdetail1Dto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Parqxdetail1> { 
		return this.parqxdetail1sService.remove(id); 
	} 
}