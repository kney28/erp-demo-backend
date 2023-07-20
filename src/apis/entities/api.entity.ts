import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique } from 'typeorm'; 

@Entity() 
@Unique(['name']) 
export class Api extends BaseEntity { 
	@Column() 
	name: string; 

	@Column() 
	description: string; 

	@Column() 
	api_base: string; 

	@Column() 
	api_login: string; 

	@Column() 
	api_user: string; 

	@Column() 
	api_password: string; 

	@Column() 
	api_tokent: string;
	
	@Column() 
	api_tokent_transaccional: string;

	@Column({
		default: ''
	})
	api_hash_key: string;

	@Column({
		default: ''
	})
	api_id_company: string;

} 
