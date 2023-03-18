import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountingValidity } from 'src/accountingValidity/entities/accountingvalidity.entity';
import { AccountingSeat } from 'src/accountingSeats/entities/accountingSeat.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Accbeginningbalancesdet extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => AccountingValidity, (validity) => validity.validity)
  idaccountvalidity: AccountingValidity;

  @ManyToOne(() => AccountingSeat, (accountingSeat) => accountingSeat.detail, {
    eager: true,
  })
  idseattype: AccountingSeat;

  @Column()
  idconsbegibalan: number;

  @Column()
  docudate: Date;

  @Column()
  initbaladeta: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
