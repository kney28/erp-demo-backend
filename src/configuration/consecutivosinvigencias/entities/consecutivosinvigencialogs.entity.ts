import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogConsecutivosinvigenciaType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class ConsecutivosinvigenciaLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogConsecutivosinvigenciaType, 
	}) 
	type: LogConsecutivosinvigenciaType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
