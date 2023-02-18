import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Validity } from 'src/configuration/validity/entities/validity.entity';

export enum LISTSTATUSCOUNTINGTERMS {
  'ABIERTO' = 1,
  'ACTIVO' = 2,
  'EN CIERRE' = 3,
  'CERRADO' = 4,
}

export enum LISTINUSO {
  SI = 1,
  NO = 2,
}

@Entity()
export class Accountingterms extends BaseEntity {
  @Column({
    type: 'enum',
    enum: LISTSTATUSCOUNTINGTERMS,
    default: LISTSTATUSCOUNTINGTERMS.ABIERTO,
  })
  status: LISTSTATUSCOUNTINGTERMS;

  @Column({
    type: 'enum',
    enum: LISTINUSO,
    default: LISTINUSO.NO,
  })
  inuse: LISTINUSO;

  @ManyToOne(() => Validity, (validity) => validity.accountingtermss, {
    eager: true,
  })
  validity: Validity;

  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //status: <define type enum>;
}
