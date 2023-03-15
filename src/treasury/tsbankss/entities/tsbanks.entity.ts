import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm'; 
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';

export enum Status {
	ACTIVE = 1,
	INACTIVE =2
}

@Entity() 
@Unique(['code']) 
export class Tsbanks extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({
		default: null
	}) 
	codeach: string; 

	@Column({ 
		type: 'enum', 
		enum: Status,
	}) 
	status: Status;
	
	@ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.thirdtsbank, {
		eager: true
	})
	idthird: ThirdPerson;
} 
