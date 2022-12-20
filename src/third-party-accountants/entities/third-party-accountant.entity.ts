import { selectionCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPerson } from 'src/thirdPersons/entities/thirdPerson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

export enum taxpayerTypeCatalog {
  SIMPLIFIED_REGIMEN = 1,
  COMMON_REGIME = 2,
  GREAT_CONTRIBUTOR = 3,
  STATE_COMPANY = 4,
}

export enum withholdingTypeCatalog {
  APPLY_HOLD = 1,
  AUTO_RETAINING = 2,
  EXEMPT = 3,
}

@Entity()
export class ThirdPartyAccountant extends BaseEntity {
  @ManyToOne(() => ThirdPerson, (third) => third.thirdPartyAccountant)
  third: ThirdPerson;

  @Column({
    type: 'enum',
    enum: taxpayerTypeCatalog,
  })
  taxpayer_type: taxpayerTypeCatalog;

  @Column({
    type: 'enum',
    enum: withholdingTypeCatalog,
  })
  withholding_type: withholdingTypeCatalog;

  @Column({
    type: 'enum',
    enum: selectionCatalog,
  })
  affect_ICA: selectionCatalog;

  @Column()
  percentage_ICA: number;

  @Column()
  status: number;
}
