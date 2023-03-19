import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogAccbeginningbalancesdetType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class AccbeginningbalancesdetLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogAccbeginningbalancesdetType, 
	}) 
	type: LogAccbeginningbalancesdetType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
