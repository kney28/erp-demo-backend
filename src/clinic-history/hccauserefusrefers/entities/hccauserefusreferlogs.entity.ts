import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogHccauserefusreferType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class HccauserefusreferLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogHccauserefusreferType, 
	}) 
	type: LogHccauserefusreferType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
