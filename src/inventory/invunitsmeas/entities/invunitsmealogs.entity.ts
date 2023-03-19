import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogInvunitsmeaType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class InvunitsmeaLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogInvunitsmeaType, 
	}) 
	type: LogInvunitsmeaType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
