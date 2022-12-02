import { BaseEntity } from 'src/base/baseEntity';
import { BeforeInsert, Column, Entity } from 'typeorm';

export enum AccountingValidityStatus {
  OPEN = 1,
  ACITVE = 2,
  IN_CLOSURE = 3,
  CLOSED = 4,
}

export enum AccountingValidityInUse {
  YES = 1,
  NO = 2,
}

@Entity()
export class AccountingValidity extends BaseEntity {
  @Column()
  validity: number;

  @Column({
    type: 'enum',
    enum: AccountingValidityStatus,
    default: AccountingValidityStatus.OPEN,
  })
  status: AccountingValidityStatus;

  @Column({
    type: 'enum',
    enum: AccountingValidityInUse,
    default: AccountingValidityInUse.NO,
  })
  in_use: AccountingValidityInUse;
}
