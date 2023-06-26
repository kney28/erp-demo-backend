import { BaseEntity } from 'src/base/baseEntity';
import { Status } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
import { Neighborhood } from 'src/configuration/neighborhoods/entities/neighborhood.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Charge } from 'src/admissions/charges/entities/charge.entity';
import { Occupation } from 'src/admissions/occupations/entities/occupation.entity';
import { Moderatingcopay } from 'src/admissions/moderatingcopays/entities/moderatingcopay.entity';
import { Sisbenlevel } from 'src/admissions/sisbenlevels/entities/sisbenlevel.entity';
import { Specialpopulation } from 'src/admissions/specialpopulations/entities/specialpopulation.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { ThirdPartyAccountant } from 'src/third-party-accountants/entities/third-party-accountant.entity';

export enum Documettype {
	CC = 1,
	CE = 2,
	CD = 3,
	PA = 4,
	SC = 5,
	PE = 6,
	RC = 7,
	TI = 8,
	CN = 9,
	AS = 10,
	MS = 11,
	DE = 12,
	SI = 13
}

export enum Sex {
	NONE = 1,
	FEMALE = 2,
	MALE = 3
}

export enum Maritalstatus {
	UNMARRIED = 1,
	MARRIED = 2,
	DIVORCED = 3,
	SEPARATE = 4,
	WIDOWER = 5,
	FREEUNION = 6
}

export enum Regimetype {
	CONTRIBUTORY = 1,
	SUBSIDIZED = 2,
	LINKED = 3,
	PARTICULAR = 4,
	OTHER = 5
} 

export enum Contributortype {
	NONE = 0,
	CONTRIBUTOR = 1,
	BENEFICIARY = 2,
	ADDITIONAL = 3,
	RETIREDRETIREE = 4,
	PENSIONER = 5
}

export enum Kinship {
	NONE = 0,
	BROTHER = 1,
	GRANDFATHER = 2,
	GRANDSON = 3,
	GREATGRANDSON = 4,
	NEPHEW = 5,
	UNCLE = 6,
	GREATGRANDFATHER = 7,
	COUSIN = 8,
	SONINLAW = 9,
	DAUGHTERINLAW = 10,
	FATHERINLAW = 11,
	BROTHERINLAW = 12,
	OTHER = 13
}


@Entity() 
@Unique(['code']) 
export class Patient extends BaseEntity { 
	@ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.patients, {
		eager: true
	})
	neighborhood: Neighborhood;

	@ManyToOne(() => Country, (country) => country.patients, {
		eager: true
	})
	country: Country;

	@ManyToOne(() => Charge, (charge) => charge.patients, {
		eager: true
	})
	charge: Charge;

	@ManyToOne(() => Occupation, (occupation) => occupation.patients, {
		eager: true
	})
	occupation: Occupation;

	@ManyToOne(() => Moderatingcopay, (moderatingcopay) => moderatingcopay.patients, {
		eager: true
	})
	copgovfee: Moderatingcopay;

	@ManyToOne(() => Sisbenlevel, (sisbenlevel) => sisbenlevel.patients, {
		eager: true
	})
	sisbenlevel: Sisbenlevel;

	@ManyToOne(() => Specialpopulation, (specialpopulation) => specialpopulation.patients, {
		eager: true
	})
	specialpopulation: Specialpopulation;

	/*pendiente de posible correccion de entidades ThirdPerson y ThirdPartyAccountant
	ya que en el documento del la tarea EH-155 se mencionan los campos direccion y telefono
	y esto no Existen en la entidades mencionadas*/
	@ManyToOne(() => ThirdPerson, (thirdperson) => thirdperson.patients, {
		eager: true
	})
	thirdperson: ThirdPerson;

	@ManyToOne(() => ThirdPartyAccountant, (thirdPartyAccountant) => thirdPartyAccountant.patients, {
		eager: true
	})
	thirdPartyAccountant: ThirdPartyAccountant;
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	@Column() 
	code: string; 

	@Column({ 
		type: 'enum', 
		enum: Documettype
	}) 
	documettype: Documettype; 

	@Column() 
	documentnumber: string; 

	@Column({ nullable: true }) 
	name1: string; 

	@Column({ nullable: true }) 
	name2: string; 

	@Column({ nullable: true }) 
	lastname1: string; 

	@Column({ nullable: true }) 
	lastname2: string; 

	@Column({ nullable: true }) 
	fullname: string; 

	//@Column() 
	//neighborhood: number; 

	@Column({ nullable: true }) 
	municipality: number; 

	//@Column() 
	//country: number; 

	@Column({ nullable: true }) 
	email: string; 

	@Column({ type: 'date'}) 
	datebirth: Date; 

	@Column() 
	age: string; 

	@Column({ 
		type: 'enum', 
		enum: Sex, 
	}) 
	sex: Sex; 

	@Column({ 
		type: 'enum', 
		enum: Maritalstatus
	}) 
	maritalstatus: Maritalstatus; 

	//@Column() 
	//charge: number; 

	//@Column() 
	//occupation: number; 

	@Column({ nullable: true }) 
	mothername: string; 

	@Column({ nullable: true }) 
	fathername: string; 

	@Column({ 
		type: 'enum', 
		enum: Regimetype, 
	}) 
	regimetype: Regimetype; 

	@Column({ 
		type: 'enum', 
		enum: Contributortype, 
	}) 
	contributortype: Contributortype; 

	@Column({ 
		type: 'enum', 
		enum: Kinship,
		nullable: true
	}) 
	kinship: Kinship; 

	//@Column() 
	//copgovfee: number; 

	//@Column() 
	//sisbenlevel: number; 

	//Falta crear modelo de benefitplan
	@Column({ nullable: true }) 
	benefitplan: number; 

	@Column() 
	menbership: string; 

	//@Column()
	//specialpopulation: number;

	@Column({ nullable: true }) 
	patientaddress: number; 

	@Column({ nullable: true }) 
	phone: number; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
	}) 
	status: Status;

}