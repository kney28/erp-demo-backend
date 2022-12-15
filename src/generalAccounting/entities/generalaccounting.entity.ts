import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum GeneralAccountingMonth {
  JANUARY = 1,
  FEBRUARY = 2,
  MARCH = 3,
  APRIL = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUGUST = 8,
  SEPTEMBER = 9,
  OCTOBER = 10,
  NOVEMBER = 11,
  DECEMBER = 12,
}

export enum GeneralAccountingRounding {
  WITHOUTROUNDING = 1,
  BYWEIGHT = 2,
}

export enum GeneralAccountingInUse {
  YES = 1,
  NO = 2,
}

export enum GeneralAccountingStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}
@Entity()
export class GeneralAccounting extends BaseEntity {
  /*@Column()
  validity: number;*/

  @Column({
    type: 'enum',
    enum: GeneralAccountingMonth,
    default: GeneralAccountingMonth.JANUARY,
  })
  month: GeneralAccountingMonth;

  @Column({
    type: 'enum',
    enum: GeneralAccountingRounding,
  })
  rounding: GeneralAccountingRounding;

  /*@Column()
  typeclosingseat: number;

  @Column()
  lostaccount: number;

  @Column()
  utilityaccount: number;

  @Column()
  accountclosing: number;*/

  @Column({
    type: 'enum',
    enum: GeneralAccountingInUse,
  })
  in_use: GeneralAccountingInUse;

  @Column({
    type: 'enum',
    enum: GeneralAccountingStatus,
    default: GeneralAccountingStatus.ACTIVE,
  })
  status: GeneralAccountingStatus;
}
