import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogInvmanufrolesType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class InvmanufrolesLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogInvmanufrolesType, 
	}) 
	type: LogInvmanufrolesType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
