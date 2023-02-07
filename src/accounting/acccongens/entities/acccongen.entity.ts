import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { Validity } from 'src/configuration/validity/entities/validity.entity';


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

export enum LISTREDONDING {
  'SIN REDONDEO' = 1,
  ' AL PESO' = 2,
}

export enum LISTINUSO {
  SI = 1,
  NO = 2,
}
export enum LISTSTATUS {
  ACTIVO = 1,
  INACTIVO = 2,
}

@Entity()
@Unique(['code'])
export class Acccongen extends BaseEntity {
  @Column()
  code: string;

  //@Column()
  //validity: number;

  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //month: <define type enum>;
  @Column({
    type: 'enum',
    enum: LISTMONTH,
    default: LISTMONTH.ENERO,
  })
  month: LISTMONTH;
  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //rounding: <define type enum>;
  @Column({
    type: 'enum',
    enum: LISTREDONDING,
    default: LISTREDONDING['SIN REDONDEO'],
  })
  rounding: LISTREDONDING;
  @Column()
  seattypeclosure: number;

  //@Column()
  //lostcount: number;

  @Column()
  profitaccount: number;

  @Column()
  closingaccount: number;

  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //inuse: <define type enum>;
  @Column({
    type: 'enum',
    enum: LISTINUSO,
    default: LISTINUSO.NO,
  })
  inuse: LISTINUSO;
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

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.acccongens, {
    eager: true,
  })
  lostcount: AccountCatalog;

  @ManyToOne(() => Validity, (validity) => validity.acccongens, {
    eager: true,
  })
  validity: Validity;
}
