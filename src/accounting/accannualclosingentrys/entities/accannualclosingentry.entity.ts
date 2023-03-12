import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Validity } from 'src/configuration/validity/entities/validity.entity';
import { AccountBalance } from 'src/account-balances/entities/account-balance.entity';

@Entity()
@Unique(['code'])
export class Accannualclosingentry extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Validity, (validity) => validity.status, {
    eager: true,
  })
  validity: Validity;

  @ManyToOne(() => AccountBalance, (accountBalance) => accountBalance.month, {
    eager: true,
  })
  month: AccountBalance;
}
