import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogDetailnumerationdianType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity('detail_numeration_dian_logs') 
export class DetailnumerationdianLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogDetailnumerationdianType, 
	}) 
	type: LogDetailnumerationdianType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
