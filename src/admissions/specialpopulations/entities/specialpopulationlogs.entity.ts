import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogSpecialpopulationType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class SpecialpopulationLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogSpecialpopulationType, 
	}) 
	type: LogSpecialpopulationType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
