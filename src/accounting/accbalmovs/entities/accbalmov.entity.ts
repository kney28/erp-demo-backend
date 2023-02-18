import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { Acccostcenters } from 'src/accounting/acccostcenterss/entities/acccostcenters.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';

export enum LISTMONTH {
  ENERO = 1,
  FEBRERO = 2,
  MARZO = 3,
  ABRIL = 4,
  MAYO = 5,
  JUNIO = 6,
  JULIO = 7,
  AGOSTO = 8,
  SEPTIEMBRE = 9,
  OCTUBRE = 10,
  NOVIEMBRE = 11,
  DICIEMBRE = 12,
}

export enum LISTSTATUS {
  ACTIVO = 1,
  INACTIVO = 2,
}

@Entity()
export class Accbalmov extends BaseEntity {
  //@Column()
  //code: string;

  //@Column()
  //idledgeraccount: number;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idledgeraccount: AccountCatalog;

  @ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.account, {
    eager: true,
  })
  idthird: ThirdPerson;
  //@Column()
  //idthird: number;

  @ManyToOne(() => Acccostcenters, (acccostcenters) => acccostcenters.account, {
    eager: true,
  })
  idcostcenter: Acccostcenters;
  //@Column()
  //idcostcenter: number;

  @Column()
  debit: number;

  @Column()
  credit: number;

  @Column({
    type: 'enum',
    enum: LISTMONTH,
    default: LISTMONTH.ENERO,
  })
  month: LISTMONTH;

  @Column({
    type: 'enum',
    enum: LISTSTATUS,
    default: LISTSTATUS.ACTIVO,
  })
  status: LISTSTATUS;

}
