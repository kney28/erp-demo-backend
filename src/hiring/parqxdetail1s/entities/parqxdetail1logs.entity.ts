import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogParqxdetail1Type { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Parqxdetail1Logs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogParqxdetail1Type, 
	}) 
	type: LogParqxdetail1Type; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
