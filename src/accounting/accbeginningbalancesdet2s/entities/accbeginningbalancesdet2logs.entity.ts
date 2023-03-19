import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogAccbeginningbalancesdet2Type { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Accbeginningbalancesdet2Logs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogAccbeginningbalancesdet2Type, 
	}) 
	type: LogAccbeginningbalancesdet2Type; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
