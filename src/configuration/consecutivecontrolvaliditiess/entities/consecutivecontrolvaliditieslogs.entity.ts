import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogConsecutivecontrolvaliditiesType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class ConsecutivecontrolvaliditiesLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogConsecutivecontrolvaliditiesType, 
	}) 
	type: LogConsecutivecontrolvaliditiesType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
