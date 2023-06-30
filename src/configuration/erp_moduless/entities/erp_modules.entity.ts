import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity'

@Entity() 
@Unique(['code']) 
export class Erp_modules extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	module: string; 

	@Column() 
	menu: string; 

	@Column() 
	option: string;

	@OneToMany(() => Permissions, (permissions) => permissions.option)
  	permissions: Permissions[];

} 
