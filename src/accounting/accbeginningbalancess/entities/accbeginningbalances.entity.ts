import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountingValidity } from 'src/accountingValidity/entities/accountingvalidity.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Accbeginningbalances extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => AccountingValidity, (validity) => validity.validity)
  idaccountvalidity: AccountingValidity;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
