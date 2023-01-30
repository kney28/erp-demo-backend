import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { SubcatcupssService } from './subcatcupss.service'; 
import { CreateSubcatcupsDto } from './dto/create-subcatcups.dto'; 
import { UpdateSubcatcupsDto } from './dto/update-subcatcups.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Subcatcups } from './entities/subcatcups.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/subcatcupss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class SubcatcupssController { 
	constructor(private readonly subcatcupssService: SubcatcupssService) {} 

	@Post() 
	create( 
		@Body() createSubcatcupsDto: CreateSubcatcupsDto, 
	): Promise<Subcatcups> { 
		return this.subcatcupssService.create(createSubcatcupsDto); 
	} 

	@Get() 
	findAll(): Promise<Subcatcups[]> { 
		return this.subcatcupssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Subcatcups> { 
		return this.subcatcupssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateSubcatcupsDto: UpdateSubcatcupsDto, 
	): Promise<Subcatcups> { 
		return this.subcatcupssService.update(id, updateSubcatcupsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Subcatcups> { 
		return this.subcatcupssService.remove(id); 
	} 
}