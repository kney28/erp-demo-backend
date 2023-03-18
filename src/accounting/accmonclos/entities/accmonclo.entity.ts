import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountBalance } from 'src/account-balances/entities/account-balance.entity';

@Entity()
@Unique(['code'])
export class Accmonclo extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => AccountBalance, (accountBalance) => accountBalance.month, {
    eager: true,
  })
  month: AccountBalance;
}
