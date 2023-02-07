import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Validity } from 'src/configuration/validity/entities/validity.entity';
import { Acccongen } from 'src/accounting/acccongens/entities/acccongen.entity'
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
  /*@Column()
  validity: number;*/
  @ManyToOne(() => Validity, (validity) => validity.accountingValidity, {
    eager: true
  })
  validity: Validity;

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
