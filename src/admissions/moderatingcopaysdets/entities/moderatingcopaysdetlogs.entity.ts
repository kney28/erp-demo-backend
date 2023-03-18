import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogModeratingcopaysdetType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class ModeratingcopaysdetLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogModeratingcopaysdetType, 
	}) 
	type: LogModeratingcopaysdetType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
