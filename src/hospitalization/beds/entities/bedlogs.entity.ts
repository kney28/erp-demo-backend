import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogBedType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity('bed_log') 
export class BedLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogBedType, 
	}) 
	type: LogBedType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
