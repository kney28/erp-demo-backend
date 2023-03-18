import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { TsconpaysService } from './tsconpays.service'; 
import { CreateTsconpayDto } from './dto/create-tsconpay.dto'; 
import { UpdateTsconpayDto } from './dto/update-tsconpay.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Tsconpay } from './entities/tsconpay.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('treasury/tsconpays') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class TsconpaysController { 
	constructor(private readonly tsconpaysService: TsconpaysService) {} 

	@Post() 
	create( 
		@Body() createTsconpayDto: CreateTsconpayDto, 
	): Promise<Tsconpay> { 
		return this.tsconpaysService.create(createTsconpayDto); 
	} 

	@Get() 
	findAll(): Promise<Tsconpay[]> { 
		return this.tsconpaysService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Tsconpay> { 
		return this.tsconpaysService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateTsconpayDto: UpdateTsconpayDto, 
	): Promise<Tsconpay> { 
		return this.tsconpaysService.update(id, updateTsconpayDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Tsconpay> { 
		return this.tsconpaysService.remove(id); 
	} 
}