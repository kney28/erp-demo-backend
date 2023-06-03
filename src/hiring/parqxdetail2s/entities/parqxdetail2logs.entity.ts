import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogParqxdetail2Type { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Parqxdetail2Logs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogParqxdetail2Type, 
	}) 
	type: LogParqxdetail2Type; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
