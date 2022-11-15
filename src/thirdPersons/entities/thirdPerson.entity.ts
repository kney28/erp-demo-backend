import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/base/baseEntity';
import { BeforeInsert, Column, Entity, Unique } from 'typeorm';

export enum ThirdPersonDocument {
  IDENTITYCARD = 'identity card',
  IDENTIFICATIONCARD = 'identification card',
  FOREIGNCARD = 'foreign card',
  FOREIGNERID = 'foregner ID',
  NIT = 'NIT',
  PASSPORT = 'passport',
  FOREIGNIDENTIFICATIONDOCUMENT = 'Foreign Identification Document',
}

export enum ThirdPersonStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
export enum ThirdPersonNature {
  NATURAL = 'natural',
  LEGAL = 'legal',
}

@Entity()
@Unique(['document'])
export class ThirdPerson extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ThirdPersonDocument,
  })
  documenttype: ThirdPersonDocument;

  @Column({
    type: 'enum',
    enum: ThirdPersonNature,
  })
  legalnature: ThirdPersonNature;

  @Column({
    type: 'enum',
    enum: ThirdPersonStatus,
    default: ThirdPersonStatus.ACTIVE,
  })
  status: ThirdPersonStatus;

  @Column()
  document: string;

  @Column()
  socialreason: string;

  @Column()
  firstname: string;

  @Column()
  secondname: string;

  @Column()
  firstsurname: string;

  @Column()
  secondsurname: string;

  @Column()
  verificationcode: number;

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
    return `${this.socialreason} ${this.firstname} ${this.secondname} ${this.firstsurname} ${this.secondsurname}`;
  }

  constructor(partial: Partial<ThirdPerson>) {
    super();
    Object.assign(this, partial);
  }
}
