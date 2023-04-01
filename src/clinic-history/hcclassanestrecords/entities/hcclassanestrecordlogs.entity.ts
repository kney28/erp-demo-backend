import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogHcclassanestrecordType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class HcclassanestrecordLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogHcclassanestrecordType, 
	}) 
	type: LogHcclassanestrecordType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
