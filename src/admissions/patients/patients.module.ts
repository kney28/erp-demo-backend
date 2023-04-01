import { Module } from '@nestjs/common'; 
import { PatientsService } from './patients.service'; 
import { PatientsController } from './patients.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Patient } from './entities/patient.entity'; 
import { PatientLogs } from './entities/patientlogs.entity'; 
import { PatientSubscriber } from './entities/patient.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Patient]), 
		TypeOrmModule.forFeature([PatientLogs]), 
	], 
	controllers: [PatientsController], 
	providers: [PatientsService, PatientSubscriber], 
	exports: [PatientsService], 
})
export class PatientsModule {}