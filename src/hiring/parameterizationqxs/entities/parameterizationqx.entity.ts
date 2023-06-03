import { BaseEntity } from 'src/base/baseEntity';
import { Status } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

export enum Tariffmanual {
	NINGUNO = 0,
	SOAT = 1,
	ISS = 2,
	ISS_2004 = 3
}

@Entity() 
@Unique(['code']) 
export class Parameterizationqx extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: Tariffmanual
	}) 
	tariffmanual: Tariffmanual; 
	
	@Column({ 
		type: 'enum', 
		enum: Status
	}) 
	status: Status; 

} 
