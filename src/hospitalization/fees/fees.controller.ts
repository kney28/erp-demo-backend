import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { FeesService } from './fees.service'; 
import { CreateFeeDto } from './dto/create-fee.dto'; 
import { UpdateFeeDto } from './dto/update-fee.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Fee } from './entities/fee.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hospitalization/fees') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class FeesController { 
	constructor(private readonly feesService: FeesService) {} 

	@Post() 
	create( 
		@Body() createFeeDto: CreateFeeDto, 
	): Promise<Fee> { 
		return this.feesService.create(createFeeDto); 
	} 

	@Get() 
	findAll(): Promise<Fee[]> { 
		return this.feesService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Fee> { 
		return this.feesService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateFeeDto: UpdateFeeDto, 
	): Promise<Fee> { 
		return this.feesService.update(id, updateFeeDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Fee> { 
		return this.feesService.remove(id); 
	} 
}