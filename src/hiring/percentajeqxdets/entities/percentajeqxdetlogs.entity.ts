import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogPercentajeqxdetType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class PercentajeqxdetLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogPercentajeqxdetType, 
	}) 
	type: LogPercentajeqxdetType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
