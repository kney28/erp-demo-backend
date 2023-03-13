import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogAccbeginningbalancesdet3Type { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Accbeginningbalancesdet3Logs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogAccbeginningbalancesdet3Type, 
	}) 
	type: LogAccbeginningbalancesdet3Type; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
