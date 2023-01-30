import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Parameterizationcups } from 'src/hiring/parameterizationcupss/entities/parameterizationcups.entity';

export enum CategoriescupsStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}

@Entity() 
@Unique(['code']) 
export class Categoriescups extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column({ 
		type: 'enum', 
		enum: CategoriescupsStatus, 
		default: CategoriescupsStatus.ACTIVE, 
	}) 
	status: CategoriescupsStatus;

	@OneToMany(() => Parameterizationcups, (parameterizationCups) => parameterizationCups.category)
	parameterizationCups: Parameterizationcups[];
} 
