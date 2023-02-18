import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, OneToMany } from 'typeorm'; 
import { Accbalmov } from 'src/accounting/accbalmovs/entities/accbalmov.entity';
export enum LISTSTATUS {
  ACTIVO = 1,
  INACTIVO = 2,
}

@Entity() 
@Unique(['code']) 
export class Acccostcenters extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	//The next column is ENUM, please complete the code necessary  
	//@Column({ 
	//	type: 'enum', 
	//	enum: <define type enum>, 
	//	default: <define value of default type enum>, 
	//}) 
	//status: <define type enum>;

  @Column({
    type: 'enum',
    enum: LISTSTATUS,
    default: LISTSTATUS.ACTIVO,
  })
  status: LISTSTATUS;

  @OneToMany(() => Accbalmov, (accbalmov) => accbalmov.idcostcenter)
  account: Accbalmov[];
}
