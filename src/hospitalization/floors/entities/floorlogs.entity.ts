import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogFloorType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity('floor_logs') 
export class FloorLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogFloorType, 
	}) 
	type: LogFloorType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
