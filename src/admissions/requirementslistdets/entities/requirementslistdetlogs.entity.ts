import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogRequirementslistdetType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class RequirementslistdetLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogRequirementslistdetType, 
	}) 
	type: LogRequirementslistdetType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
}
