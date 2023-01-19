import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogNumerationdianType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity('numeration_dian_logs') 
export class NumerationdianLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogNumerationdianType, 
	}) 
	type: LogNumerationdianType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
