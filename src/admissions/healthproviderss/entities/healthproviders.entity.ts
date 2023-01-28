import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany, ManyToOne } from 'typeorm';
import { Headquarters } from 'src/admissions/headquarterss/entities/headquarters.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';

export enum healthprovidersStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}
export enum levels{
	LEVEL_I = 1,
	LEVEL_II = 2,
	LEVEL_III = 3,
	LEVEL_IV = 4,
}
export enum providerClassOptions{
	NONE = 1,
	OUTPATIENT = 2,
	HOSPITABLE = 3,
	MIX = 4,
}
@Entity() 
@Unique(['code']) 
export class Healthproviders extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: levels,
	}) 
	complexitylevel: levels; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: providerClassOptions,
	}) 
	providerclass: providerClassOptions; 

	@Column() 
	legrepnam: string; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: healthprovidersStatus, 
		default: healthprovidersStatus.ACTIVE,
	}) 
	status: healthprovidersStatus; 

	@Column() 
	legrepide: string; 

	@OneToMany(() => Headquarters, (headquarters) => headquarters.healthprovider)
	headquarters: Headquarters[];

	@ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.healthProviders, {
		eager: true
	})
	thirdPerson: ThirdPerson;
} 
