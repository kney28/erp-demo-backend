import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ConsecutivecontrolvaliditiessService } from './consecutivecontrolvaliditiess.service'; 
import { CreateConsecutivecontrolvaliditiesDto } from './dto/create-consecutivecontrolvalidities.dto'; 
import { UpdateConsecutivecontrolvaliditiesDto } from './dto/update-consecutivecontrolvalidities.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Consecutivecontrolvalidities } from './entities/consecutivecontrolvalidities.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('configuration/consecutivecontrolvaliditiess') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ConsecutivecontrolvaliditiessController { 
	constructor(private readonly consecutivecontrolvaliditiessService: ConsecutivecontrolvaliditiessService) {} 

	@Post() 
	create( 
		@Body() createConsecutivecontrolvaliditiesDto: CreateConsecutivecontrolvaliditiesDto, 
	): Promise<Consecutivecontrolvalidities> { 
		return this.consecutivecontrolvaliditiessService.create(createConsecutivecontrolvaliditiesDto); 
	} 

	@Get() 
	findAll(): Promise<Consecutivecontrolvalidities[]> { 
		return this.consecutivecontrolvaliditiessService.findAll(); 
	}
	
	@Get('/head/:id') 
	findAllByHead(@Param('id') id: string): Promise<Consecutivecontrolvalidities[]> { 
		return this.consecutivecontrolvaliditiessService.findAllByHead(id); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Consecutivecontrolvalidities> { 
		return this.consecutivecontrolvaliditiessService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateConsecutivecontrolvaliditiesDto: UpdateConsecutivecontrolvaliditiesDto, 
	): Promise<Consecutivecontrolvalidities> { 
		return this.consecutivecontrolvaliditiessService.update(id, updateConsecutivecontrolvaliditiesDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Consecutivecontrolvalidities> { 
		return this.consecutivecontrolvaliditiessService.remove(id); 
	} 
}