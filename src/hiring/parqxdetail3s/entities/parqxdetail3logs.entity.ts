import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogParqxdetail3Type { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Parqxdetail3Logs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogParqxdetail3Type, 
	}) 
	type: LogParqxdetail3Type; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
