import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ChargesService } from './charges.service'; 
import { CreateChargeDto } from './dto/create-charge.dto'; 
import { UpdateChargeDto } from './dto/update-charge.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Charge } from './entities/charge.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/charges') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ChargesController { 
	constructor(private readonly chargesService: ChargesService) {} 

	@Post() 
	create( 
		@Body() createChargeDto: CreateChargeDto, 
	): Promise<Charge> { 
		return this.chargesService.create(createChargeDto); 
	} 

	@Get() 
	findAll(): Promise<Charge[]> { 
		return this.chargesService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Charge> { 
		return this.chargesService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateChargeDto: UpdateChargeDto, 
	): Promise<Charge> { 
		return this.chargesService.update(id, updateChargeDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Charge> { 
		return this.chargesService.remove(id); 
	} 
}