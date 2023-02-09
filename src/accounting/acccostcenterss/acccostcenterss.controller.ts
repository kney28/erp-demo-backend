import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { AcccostcenterssService } from './acccostcenterss.service'; 
import { CreateAcccostcentersDto } from './dto/create-acccostcenters.dto'; 
import { UpdateAcccostcentersDto } from './dto/update-acccostcenters.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Acccostcenters } from './entities/acccostcenters.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('acccostcenterss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class AcccostcenterssController { 
	constructor(private readonly acccostcenterssService: AcccostcenterssService) {} 

	@Post() 
	create( 
		@Body() createAcccostcentersDto: CreateAcccostcentersDto, 
	): Promise<Acccostcenters> { 
		return this.acccostcenterssService.create(createAcccostcentersDto); 
	} 

	@Get() 
	findAll(): Promise<Acccostcenters[]> { 
		return this.acccostcenterssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Acccostcenters> { 
		return this.acccostcenterssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateAcccostcentersDto: UpdateAcccostcentersDto, 
	): Promise<Acccostcenters> { 
		return this.acccostcenterssService.update(id, updateAcccostcentersDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Acccostcenters> { 
		return this.acccostcenterssService.remove(id); 
	} 
}