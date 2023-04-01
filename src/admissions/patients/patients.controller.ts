import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { PatientsService } from './patients.service'; 
import { CreatePatientDto } from './dto/create-patient.dto'; 
import { UpdatePatientDto } from './dto/update-patient.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Patient } from './entities/patient.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('admissions/patients') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class PatientsController { 
	constructor(private readonly patientsService: PatientsService) {} 

	@Post() 
	create( 
		@Body() createPatientDto: CreatePatientDto, 
	): Promise<Patient> { 
		return this.patientsService.create(createPatientDto); 
	} 

	@Get() 
	findAll(): Promise<Patient[]> { 
		return this.patientsService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Patient> { 
		return this.patientsService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updatePatientDto: UpdatePatientDto, 
	): Promise<Patient> { 
		return this.patientsService.update(id, updatePatientDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Patient> { 
		return this.patientsService.remove(id); 
	} 
}