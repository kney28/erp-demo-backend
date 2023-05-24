import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogParameterizationqxType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class ParameterizationqxLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogParameterizationqxType, 
	}) 
	type: LogParameterizationqxType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
