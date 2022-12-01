import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

export enum levelCatalog {
  CLASS = 1,
  GROUP = 2,
  ACCOUNT = 3,
  SUB_ACCOUNT = 4,
  AUXILIARY = 5,
}

export enum classCatalog {
  ACTIVE = 1,
  PASSIVE = 2,
  PATRIMONY = 3,
  INCOME = 4,
  EXPENSES = 5,
  SALES_COSTS = 6,
  PRODUCTION_COSTS = 7,
  DEBTOR_ACCOUNTS_ORDER = 8,
  CREDITORS_ORDER_ACCOUNTS = 9,
}

export enum natureCatalog {
  DEBIT = 1,
  CREDIT = 2,
}

export enum availabilityTypeCatalog {
  CHECKING_ACCOUNT = 1,
  NON_CHECKING_ACCOUNT = 2,
  BOTH = 3,
}

export enum selectionCatalog {
  YES = 1,
  NO = 2,
}

export enum affectsRetentionCatalog {
  DOES_NOT_AFFECT = 1,
  RETEFOURCE = 2,
  RETE_IVA = 3,
  RETE_ICA = 4,
}

export enum statusGlobal {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class AccountCatalog extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: levelCatalog,
  })
  level: levelCatalog;

  @Column({
    type: 'enum',
    enum: classCatalog,
  })
  class: classCatalog;

  @Column({
    type: 'enum',
    enum: natureCatalog,
  })
  nature: natureCatalog;

  @Column({
    type: 'enum',
    enum: availabilityTypeCatalog,
  })
  availabilityType: availabilityTypeCatalog;

  @Column({
    type: 'enum',
    enum: selectionCatalog,
  })
  affectsThirdParties: selectionCatalog;

  @Column({
    type: 'enum',
    enum: selectionCatalog,
  })
  affectsCostCenters: selectionCatalog;

  @Column({
    type: 'enum',
    enum: selectionCatalog,
  })
  transferThirdParties: selectionCatalog;

  @Column()
  thirdId: number;

  @Column({
    type: 'enum',
    enum: affectsRetentionCatalog,
  })
  affectsRetention: affectsRetentionCatalog;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
