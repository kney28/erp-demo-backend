import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne, OneToMany } from 'typeorm';
import { GroupsCup } from 'src/hiring/groups-cups/entities/groups-cup.entity';
import { Subgruposcups } from 'src/hiring/subgruposcupss/entities/subgruposcups.entity';
import { Categoriescups } from 'src/hiring/categoriescupss/entities/categoriescups.entity';
import { Subcatcups } from 'src/hiring/subcatcupss/entities/subcatcups.entity';
import { Healthservice } from 'src/hiring/healthservices/entities/healthservice.entity';

export enum ParameterizationcupsStatus {
	ACTIVE = 1,
	INACTIVE = 2,
}

@Entity() 
@Unique(['code']) 
export class Parameterizationcups extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	@Column() 
	codhomsoat: string; 

	@Column() 
	deshomsoat: string; 

	@Column() 
	codhomiss: string; 

	@Column() 
	deshomiss: string; 
 
	@Column({ 
		type: 'enum', 
		enum: ParameterizationcupsStatus, 
		default: ParameterizationcupsStatus.ACTIVE, 
	}) 
	status: ParameterizationcupsStatus; 

	@ManyToOne(() => GroupsCup, (group) => group.parameterizationCups, {
		eager: true
	})
	group: GroupsCup;

	@ManyToOne(() => Subgruposcups, (subgroup) => subgroup.parameterizationCups, {
		eager: true
	})
	subgroup: Subgruposcups;

	@ManyToOne(() => Categoriescups, (category) => category.parameterizationCups, {
		eager: true
	})
	category: Categoriescups;

	@ManyToOne(() => Subcatcups, (subcategory) => subcategory.parameterizationCups, {
		eager: true
	})
	subcategory: Subcatcups;

	@OneToMany(() => Healthservice, (healthservice) => healthservice.parcups)
	healthservice: Healthservice[];
} 
