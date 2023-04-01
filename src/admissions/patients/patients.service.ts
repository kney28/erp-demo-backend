import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreatePatientDto } from './dto/create-patient.dto'; 
import { UpdatePatientDto } from './dto/update-patient.dto'; 
import { Patient } from './entities/patient.entity'; 

@Injectable() 
export class PatientsService { 
	constructor( 
		@InjectRepository(Patient) 
		private patientsRepository: Repository<Patient>, 
	) {} 

	async create(createPatientDto: CreatePatientDto): Promise<Patient> { 
		const patient: Patient = 
			this.patientsRepository.create(createPatientDto); 
		return await this.patientsRepository.save(patient); 
	} 

	findAll(): Promise<Patient[]> { 
		return this.patientsRepository.find(); 
	} 

	findOne(id: string): Promise<Patient> { 
		return this.patientsRepository.findOneBy({ id }); 
	} 

	async update( 
		id: string, 
		updatePatientDto: UpdatePatientDto, 
	): Promise<Patient> { 
		const patient: Patient = await this.patientsRepository.findOneBy({ 
			id, 
		}); 
		const editedPatient: Patient = Object.assign( 
			patient, 
			updatePatientDto, 
		); 
		return await this.patientsRepository.save(editedPatient); 
	} 

	async remove(id: string): Promise<Patient> { 
		const patient: Patient = await this.patientsRepository.findOneBy({ 
			id, 
		}); 
		return await this.patientsRepository.softRemove(patient); 
	} 
}