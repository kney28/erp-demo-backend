import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/base/baseEntity';
import { ThirdPartyAccountant } from 'src/third-party-accountants/entities/third-party-accountant.entity';
import { BeforeInsert, Column, Entity, OneToMany, Unique } from 'typeorm';
import { Healthproviders } from 'src/admissions/healthproviderss/entities/healthproviders.entity';
import { Accbalmov } from 'src/accounting/accbalmovs/entities/accbalmov.entity';
import { Tsbanks } from 'src/treasury/tsbankss/entities/tsbanks.entity';
import { Healthadministrator } from 'src/admissions/healthadministrators/entities/healthadministrator.entity';
import { Cxpproviders } from 'src/accounts-payable/cxpproviderss/entities/cxpproviders.entity';
import { Patient } from 'src/admissions/patients/entities/patient.entity';

export enum ThirdPersonDocumentType {
  IDENTITYCARD = 1,
  IDENTIFICATIONCARD = 2,
  FOREIGNCARD = 3,
  FOREIGNERID = 4,
  NIT = 5,
  PASSPORT = 6,
  FOREIGNIDENTIFICATIONDOCUMENT = 7,
}

export enum ThirdPersonStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}
export enum ThirdPersonNature {
  NATURAL = 1,
  LEGAL = 2,
}

@Entity()
@Unique(['document'])
export class ThirdPerson extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ThirdPersonDocumentType,
  })
  documenttype: ThirdPersonDocumentType;

  @Column()
  document: string;

  @Column({
    nullable: true,
  })
  socialreason: string;

  @Column({
    nullable: true,
  })
  firstname: string;

  @Column({
    nullable: true,
  })
  secondname: string;

  @Column({
    nullable: true,
  })
  firstsurname: string;

  @Column({
    nullable: true,
  })
  secondsurname: string;

  @Column({
    type: 'enum',
    enum: ThirdPersonNature,
  })
  nature: ThirdPersonNature;

  @Column({
    type: 'enum',
    enum: ThirdPersonStatus,
    default: ThirdPersonStatus.ACTIVE,
  })
  status: ThirdPersonStatus;

  @Column()
  verificationcode: number;

  @OneToMany(
    () => ThirdPartyAccountant,
    (thirdPartyAccountant) => thirdPartyAccountant.third,
  )
  thirdPartyAccountant: ThirdPartyAccountant[];

  @OneToMany(() => Healthproviders, (healthProviders) => healthProviders.thirdPerson,)
	healthProviders: Healthproviders[];

  @OneToMany(() => Accbalmov, (accbalmov) => accbalmov.idthird)
  account: Accbalmov[];

  @OneToMany(() => Tsbanks, (tsbanks) => tsbanks.idthird)
  thirdtsbank: Tsbanks[];

  @OneToMany(() => Healthadministrator, (healthadministrator) => healthadministrator.idthird)
  thirdthealthadministrator: Healthadministrator[];

  @OneToMany(() => Cxpproviders, (cxpproviders) => cxpproviders.idthird)
  cxpproviders: Cxpproviders[];

  @OneToMany(() => Patient, (patient) => patient.thirdperson)
  patients: Patient[];

  @BeforeInsert()
  createVerificationCode() {
    this.document = this.document.replace(/\s/g, '');
    this.document = this.document.replace(/,/g, '');
    this.document = this.document.replace(/\./g, '');
    this.document = this.document.replace(/-/g, '');

    const value = new Array(16);
    let x = 0;
    let y = 0;

    value[1] = 3;
    value[2] = 7;
    value[3] = 13;
    value[4] = 17;
    value[5] = 19;
    value[6] = 23;
    value[7] = 29;
    value[8] = 37;
    value[9] = 41;
    value[10] = 43;
    value[11] = 47;
    value[12] = 53;
    value[13] = 59;
    value[14] = 67;
    value[15] = 71;

    for (let i = 0; i < this.document.length; i++) {
      y = parseInt(this.document.substr(i, 1));
      x += y * value[this.document.length - i];
    }
    y = x % 11;
    this.verificationcode = y > 1 ? 11 - y : y;
  }

  @Expose()
  get fullname(): string {
    return `${this.socialreason ?? ''} ${this.firstname ?? ''} ${this.secondname ?? ''} ${this.firstsurname ?? ''} ${this.secondsurname ?? ''}`;
  }

  constructor(partial: Partial<ThirdPerson>) {
    super();
    Object.assign(this, partial);
  }
}
