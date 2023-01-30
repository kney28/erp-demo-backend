import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogParameterizationcupsType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class ParameterizationcupsLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogParameterizationcupsType, 
	}) 
	type: LogParameterizationcupsType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
