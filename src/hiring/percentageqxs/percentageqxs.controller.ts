import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PercentageqxsService } from './percentageqxs.service'; 
import { CreatePercentageqxDto } from './dto/create-percentageqx.dto'; 
import { UpdatePercentageqxDto } from './dto/update-percentageqx.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Percentageqx } from './entities/percentageqx.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/percentageqxs') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PercentageqxsController { 
	constructor(private readonly percentageqxsService: PercentageqxsService) {} 

	@Post() 
	create( 
		@Body() createPercentageqxDto: CreatePercentageqxDto, 
	): Promise<Percentageqx> { 
		return this.percentageqxsService.create(createPercentageqxDto); 
	} 

	@Get() 
	findAll(): Promise<Percentageqx[]> { 
		return this.percentageqxsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Percentageqx> { 
		return this.percentageqxsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePercentageqxDto: UpdatePercentageqxDto, 
	): Promise<Percentageqx> { 
		return this.percentageqxsService.update(id, updatePercentageqxDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Percentageqx> { 
		return this.percentageqxsService.remove(id); 
	} 
}