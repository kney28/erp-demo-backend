import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogHcvadsispromipresType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class HcvadsispromipresLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogHcvadsispromipresType, 
	}) 
	type: LogHcvadsispromipresType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
