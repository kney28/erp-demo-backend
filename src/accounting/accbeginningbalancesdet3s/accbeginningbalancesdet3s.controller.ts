import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { Accbeginningbalancesdet3sService } from './accbeginningbalancesdet3s.service'; 
import { CreateAccbeginningbalancesdet3Dto } from './dto/create-accbeginningbalancesdet3.dto'; 
import { UpdateAccbeginningbalancesdet3Dto } from './dto/update-accbeginningbalancesdet3.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Accbeginningbalancesdet3 } from './entities/accbeginningbalancesdet3.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('accbeginningbalancesdet3s') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class Accbeginningbalancesdet3sController { 
	constructor(private readonly accbeginningbalancesdet3sService: Accbeginningbalancesdet3sService) {} 

	@Post() 
	create( 
		@Body() createAccbeginningbalancesdet3Dto: CreateAccbeginningbalancesdet3Dto, 
	): Promise<Accbeginningbalancesdet3> { 
		return this.accbeginningbalancesdet3sService.create(createAccbeginningbalancesdet3Dto); 
	} 

	@Get() 
	findAll(): Promise<Accbeginningbalancesdet3[]> { 
		return this.accbeginningbalancesdet3sService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Accbeginningbalancesdet3> { 
		return this.accbeginningbalancesdet3sService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateAccbeginningbalancesdet3Dto: UpdateAccbeginningbalancesdet3Dto, 
	): Promise<Accbeginningbalancesdet3> { 
		return this.accbeginningbalancesdet3sService.update(id, updateAccbeginningbalancesdet3Dto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Accbeginningbalancesdet3> { 
		return this.accbeginningbalancesdet3sService.remove(id); 
	} 
}