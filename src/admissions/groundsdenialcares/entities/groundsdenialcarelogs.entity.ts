import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogGroundsdenialcareType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class GroundsdenialcareLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogGroundsdenialcareType, 
	}) 
	type: LogGroundsdenialcareType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
