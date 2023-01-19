import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogCareserviceType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity('care_service_logs') 
export class CareserviceLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogCareserviceType, 
	}) 
	type: LogCareserviceType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
