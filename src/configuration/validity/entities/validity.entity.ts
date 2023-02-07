import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Consecutivecontrolvalidities } from 'src/configuration/consecutivecontrolvaliditiess/entities/consecutivecontrolvalidities.entity';
import { AccountingValidity } from 'src/accountingValidity/entities/accountingvalidity.entity';
import { Acccongen } from 'src/accounting/acccongens/entities/acccongen.entity'
export enum ValidityStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['year'])
export class Validity extends BaseEntity {
  @Column()
  year: number;

  @Column({
    type: 'decimal',
    scale: 2,
    precision: 11,
    nullable: true,
  })
  minimumsalary: number;

  @Column({
    type: 'decimal',
    scale: 2,
    precision: 11,
    nullable: true,
  })
  uvtvalue: number;

  @Column({
    type: 'enum',
    enum: ValidityStatus,
    default: ValidityStatus.ACTIVE,
  })
  status: ValidityStatus;

  @OneToMany(() => Consecutivecontrolvalidities, (consecutivecontrolvalidities) => consecutivecontrolvalidities.validity)
	detailvalidity: Consecutivecontrolvalidities[];

  @OneToMany(() => AccountingValidity, (accountingValidity) => accountingValidity.validity)
  accountingValidity: AccountingValidity[];

  @OneToMany(() => Acccongen, (acccongen) => acccongen.validity)
  acccongens: Acccongen[];
}
