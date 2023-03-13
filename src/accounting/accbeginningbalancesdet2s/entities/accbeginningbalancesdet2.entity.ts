import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountingSeat } from 'src/accountingSeats/entities/accountingSeat.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { Acccostcenters } from 'src/accounting/acccostcenterss/entities/acccostcenters.entity';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Accbeginningbalancesdet2 extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => AccountingSeat, (accountingSeat) => accountingSeat.detail, {
    eager: true,
  })
  idaccoentry: AccountingSeat;

  @ManyToOne(
    () => AccountCatalog,
    (accountCatalog) => accountCatalog.description,
    {
      eager: true,
    },
  )
  idledgacco: AccountCatalog;

  @ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.fullname, {
    eager: true,
  })
  idthird: ThirdPerson;

  @ManyToOne(
    () => Acccostcenters,
    (acccostcenters) => acccostcenters.description,
    {
      eager: true,
    },
  )
  idcostcent: number;

  @Column()
  duevalue: number;

  @Column()
  credvalue: number;

  @Column()
  accoentrdeta: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
