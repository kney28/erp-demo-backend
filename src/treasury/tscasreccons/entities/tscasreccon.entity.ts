import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique,ManyToOne} from 'typeorm'; 

export enum optionsStatus {
    Activo = 1,
    Inactivo =2,
  }
  
  export enum optionsInterfaceCxc {
    Ninguno = 1,
    CXC =2,
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
export class Tscasreccon extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	descripcion: string; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsInterfaceCxc, 
		default: optionsInterfaceCxc.Ninguno, 
	}) 
	inttypcxc: optionsInterfaceCxc; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	intwitbud: optionsSelect; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsSelect, 
		default: optionsSelect.No, 
	}) 
	autocollection: optionsSelect; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: optionsNature, 
		default: optionsNature.Ninguno, 
	}) 
	nature: optionsNature; 

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
