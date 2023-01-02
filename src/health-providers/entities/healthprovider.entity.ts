import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum HealthProviderStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum HealthProviderComplexityLevel {
  LEVEL1 = 1,
  LEVEL2 = 2,
  LEVEL3 = 3,
  LEVEL4 = 4,
}

export enum HealthProviderClass {
  NONE = 1,
  OUTPATIENT = 2,
  HOSPITAL = 3,
  MIXED = 4,
}

@Entity()
@Unique(['code'])
export class HealthProvider extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  /*
  @Column()
  third: number;

  @Column()
  document: string;

  @Column()
  socialreason: string;

  @Column()
  address: string;

  @Column()
  phonenumber: string;

  @Column()
  Neighborhood: string;

  @Column()
  neighborhooddescription: string;*/

  @Column({
    type: 'enum',
    enum: HealthProviderComplexityLevel,
  })
  complexitylevel: HealthProviderComplexityLevel;

  @Column({
    type: 'enum',
    enum: HealthProviderClass,
  })
  providerclass: HealthProviderClass;

  @Column()
  providerclassdescription: string;

  @Column()
  identificationlegalrepresentative: string;

  @Column()
  legalrepresentativename: string;

  @Column({
    type: 'enum',
    enum: HealthProviderStatus,
    default: HealthProviderStatus.ACTIVE,
  })
  status: HealthProviderStatus;
}
