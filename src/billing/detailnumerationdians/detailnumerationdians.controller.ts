import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { DetailnumerationdiansService } from './detailnumerationdians.service'; 
import { CreateDetailnumerationdianDto } from './dto/create-detailnumerationdian.dto'; 
import { UpdateDetailnumerationdianDto } from './dto/update-detailnumerationdian.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Detailnumerationdian } from './entities/detailnumerationdian.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('billing/detailnumerationdians') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class DetailnumerationdiansController { 
	constructor(private readonly detailnumerationdiansService: DetailnumerationdiansService) {} 

	@Post() 
	create( 
		@Body() createDetailnumerationdianDto: CreateDetailnumerationdianDto, 
	): Promise<Detailnumerationdian> { 
		return this.detailnumerationdiansService.create(createDetailnumerationdianDto); 
	} 

	@Get() 
	findAll(): Promise<Detailnumerationdian[]> { 
		return this.detailnumerationdiansService.findAll(); 
	}

	@Get('/head/:id') 
	findAllByHead(@Param('id') id: string): Promise<Detailnumerationdian[]> { 
		return this.detailnumerationdiansService.findAllByHead(id); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Detailnumerationdian> { 
		return this.detailnumerationdiansService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateDetailnumerationdianDto: UpdateDetailnumerationdianDto, 
	): Promise<Detailnumerationdian> { 
		return this.detailnumerationdiansService.update(id, updateDetailnumerationdianDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Detailnumerationdian> { 
		return this.detailnumerationdiansService.remove(id); 
	} 
}