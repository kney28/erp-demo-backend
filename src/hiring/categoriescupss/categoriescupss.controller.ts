import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { CategoriescupssService } from './categoriescupss.service'; 
import { CreateCategoriescupsDto } from './dto/create-categoriescups.dto'; 
import { UpdateCategoriescupsDto } from './dto/update-categoriescups.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Categoriescups } from './entities/categoriescups.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('hiring/categoriescupss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class CategoriescupssController { 
	constructor(private readonly categoriescupssService: CategoriescupssService) {} 

	@Post() 
	create( 
		@Body() createCategoriescupsDto: CreateCategoriescupsDto, 
	): Promise<Categoriescups> { 
		return this.categoriescupssService.create(createCategoriescupsDto); 
	} 

	@Get() 
	findAll(): Promise<Categoriescups[]> { 
		return this.categoriescupssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Categoriescups> { 
		return this.categoriescupssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateCategoriescupsDto: UpdateCategoriescupsDto, 
	): Promise<Categoriescups> { 
		return this.categoriescupssService.update(id, updateCategoriescupsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Categoriescups> { 
		return this.categoriescupssService.remove(id); 
	} 
}