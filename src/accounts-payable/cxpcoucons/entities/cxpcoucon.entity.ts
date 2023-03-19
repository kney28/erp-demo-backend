import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum ConceptType {
  NINGUNO = 0,
  CUENTASPORPAGAR = 1,
  NOTAS = 2,
}

export enum Selection {
  SI = 1,
  NO = 2,
}

@Entity()
@Unique(['code'])
export class Cxpcoucon extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ConceptType,
    default: ConceptType.NINGUNO,
  })
  type: ConceptType;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idledacc: AccountCatalog;

  @Column({
    type: 'enum',
    enum: Selection,
    default: Selection.SI,
  })
  conappl: Selection;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
