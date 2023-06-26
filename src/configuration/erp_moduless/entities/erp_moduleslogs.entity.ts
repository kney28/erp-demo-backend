import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogErp_modulesType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class Erp_modulesLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogErp_modulesType, 
	}) 
	type: LogErp_modulesType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
