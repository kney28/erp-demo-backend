import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { HolidayssService } from './holidayss.service'; 
import { CreateHolidaysDto } from './dto/create-holidays.dto'; 
import { UpdateHolidaysDto } from './dto/update-holidays.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Holidays } from './entities/holidays.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('configuration/holidays') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class HolidayssController { 
	constructor(private readonly holidayssService: HolidayssService) {} 

	@Post() 
	create( 
		@Body() createHolidaysDto: CreateHolidaysDto, 
	): Promise<Holidays> { 
		return this.holidayssService.create(createHolidaysDto); 
	} 

	@Get() 
	findAll(): Promise<Holidays[]> { 
		return this.holidayssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Holidays> { 
		return this.holidayssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateHolidaysDto: UpdateHolidaysDto, 
	): Promise<Holidays> { 
		return this.holidayssService.update(id, updateHolidaysDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Holidays> { 
		return this.holidayssService.remove(id); 
	} 
}