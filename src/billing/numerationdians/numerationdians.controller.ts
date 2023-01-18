import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { NumerationdiansService } from './numerationdians.service'; 
import { CreateNumerationdianDto } from './dto/create-numerationdian.dto'; 
import { UpdateNumerationdianDto } from './dto/update-numerationdian.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Numerationdian } from './entities/numerationdian.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('billing/numerationdians') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class NumerationdiansController { 
	constructor(private readonly numerationdiansService: NumerationdiansService) {} 

	@Post() 
	create( 
		@Body() createNumerationdianDto: CreateNumerationdianDto, 
	): Promise<Numerationdian> { 
		return this.numerationdiansService.create(createNumerationdianDto); 
	} 

	@Get() 
	findAll(): Promise<Numerationdian[]> { 
		return this.numerationdiansService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Numerationdian> { 
		return this.numerationdiansService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateNumerationdianDto: UpdateNumerationdianDto, 
	): Promise<Numerationdian> { 
		return this.numerationdiansService.update(id, updateNumerationdianDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Numerationdian> { 
		return this.numerationdiansService.remove(id); 
	} 
}