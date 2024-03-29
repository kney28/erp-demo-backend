import { selectionCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';
import { Patient } from 'src/admissions/patients/entities/patient.entity';

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

export enum selectionCatalo {
  YES = 1,
  NO = 2,
}


@Entity()
export class ThirdPartyAccountant extends BaseEntity {
  @ManyToOne(() => ThirdPerson, (third) => third.thirdPartyAccountant)
  third: ThirdPerson;

  @OneToMany(() => Patient, (patient) => patient.thirdPartyAccountant)
  patients: Patient[];

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
    enum: selectionCatalo,
  })
  affect_ICA: selectionCatalo;

  @Column()
  percentage_ICA: number;

  @Column()
  status: number;
}
