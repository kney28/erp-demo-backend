import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete
} from '@nestjs/common'; 
import { ConsecutivosinvigenciasService } from './consecutivosinvigencias.service'; 
import { CreateConsecutivosinvigenciaDto } from './dto/create-consecutivosinvigencia.dto'; 
import { UpdateConsecutivosinvigenciaDto } from './dto/update-consecutivosinvigencia.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Consecutivosinvigencia } from './entities/consecutivosinvigencia.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('configuration/consecutivosinvigencias') 
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Consecutivos sin Vigencias')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard) 
export class ConsecutivosinvigenciasController { 
	constructor(private readonly consecutivosinvigenciasService: ConsecutivosinvigenciasService) {} 

	@Post() 
	create( 
		@Body() createConsecutivosinvigenciaDto: CreateConsecutivosinvigenciaDto, 
	) { 
		return this.consecutivosinvigenciasService.create(createConsecutivosinvigenciaDto); 
	}

	/*@Post() 
	create( 
		@Body() createConsecutivosinvigenciaDto: CreateConsecutivosinvigenciaDto, 
	): Promise<Consecutivosinvigencia> { 
		return this.consecutivosinvigenciasService.create(createConsecutivosinvigenciaDto); 
	} */

	@Get() 
	findAll(): Promise<Consecutivosinvigencia[]> { 
		return this.consecutivosinvigenciasService.findAll(); 
	} 

	@Get(':entity') 
	findOne(@Param('entity') entity: string): Promise<Consecutivosinvigencia> {
		return this.consecutivosinvigenciasService.findOne(entity); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateConsecutivosinvigenciaDto: UpdateConsecutivosinvigenciaDto, 
	) { 
			return this.consecutivosinvigenciasService.update(id, updateConsecutivosinvigenciaDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Consecutivosinvigencia> { 
		return this.consecutivosinvigenciasService.remove(id); 
	}
}