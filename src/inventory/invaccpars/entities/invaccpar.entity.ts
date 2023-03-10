import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { CostCenter } from 'src/costCenter/entities/costCenter.entity';
import { RetentionConcept } from 'src/retention-concepts/entities/retention-concept.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Invaccpar extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idledaccinc: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idinvledacc: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idexpledacc: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idaccaccwitsoupurdec: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idaccaccwitsounonrep: AccountCatalog;

  @ManyToOne(() => CostCenter, (costCenter) => costCenter.code, {
    eager: true,
  })
  idcoscen: CostCenter;

  @ManyToOne(
    () => RetentionConcept,
    (retentionConcept) => retentionConcept.code,
    {
      eager: true,
    },
  )
  iddecwitcon: RetentionConcept;

  @ManyToOne(
    () => RetentionConcept,
    (retentionConcept) => retentionConcept.code,
    {
      eager: true,
    },
  )
  idnonfilwitcon: RetentionConcept;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idledaccentrremdeb: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  identremcredelacc: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idledaccdeboutrem: AccountCatalog;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idoutremcreledacc: AccountCatalog;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
