import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountingSeat } from 'src/accountingSeats/entities/accountingSeat.entity';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { CostCenter } from 'src/costCenter/entities/costCenter.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Accountingentriesdet extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(
    () => AccountingSeat,
    (accountingSeat) => accountingSeat.consecutive,
    {
      eager: true,
    },
  )
  accent: AccountingSeat;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.code, {
    eager: true,
  })
  ledacc: AccountCatalog;

  @ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.firstname, {
    eager: true,
  })
  third: ThirdPerson;

  @ManyToOne(() => CostCenter, (costCenter) => costCenter.code, {
    eager: true,
  })
  costcenter: CostCenter;

  @Column()
  debitvalue: number;

  @Column()
  creditvalue: number;

  @Column()
  detail: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
