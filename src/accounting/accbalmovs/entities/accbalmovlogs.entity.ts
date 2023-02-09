import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogAccbalmovType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class AccbalmovLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogAccbalmovType, 
	}) 
	type: LogAccbalmovType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
