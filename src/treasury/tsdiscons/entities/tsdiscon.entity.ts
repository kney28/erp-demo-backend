import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne } from 'typeorm';

export enum optionsStatus {
    Activo = 1,
    Inactivo =2,
  }
  
  export enum optionsInterfaceCxp {
    Ninguno = 1,
    CXP =2,
    Anticipos =3
  } 

  export enum optionsSelect {
    Si = 1,
    No =2,
  } 

  export enum optionsNature {
    Ninguno = 1,
    Debito =2,
    Credito =3
  }


@Entity() 
@Unique(['code']) 
export class Tsdiscon extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsInterfaceCxp, 
		default: optionsInterfaceCxp.Ninguno, 
	}) 
	inttypcxp: optionsInterfaceCxp; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	budint: optionsSelect; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	petcasreccon: optionsSelect; 

	@Column() 
	idminbox: number; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	retofadv: optionsSelect; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	petcasref: optionsSelect; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsNature, 
		default: optionsNature.Ninguno, 
	}) 
	nature: optionsNature; 

	//The next column is ENUM, please complete the code necessary  
	//@Column({ 
	//	type: 'enum', 
	//	enum: <define type enum>, 
	//	default: <define value of default type enum>, 
	//}) 
	//idledacc: <define type enum>; 
	@ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.tscasreccon, {
		eager: true
	})
	idledacc:AccountCatalog;

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsStatus, 
		default: optionsStatus.Activo, 
	}) 
	status: optionsStatus; 

} 
