import { Expose } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['document', 'deleted_at'])
export class ThirdPerson {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  documenttype: string;

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
  legalnature: string;

  @Column()
  status: string;

  @Column()
  date: Date;

  @Column()
  user: string;

  @Column()
  verificationcode: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @BeforeInsert()
  createVerificationCode() {
    this.document = this.document.replace(/\s/g, ''); // Espaces
    this.document = this.document.replace(/,/g, ''); // Commas
    this.document = this.document.replace(/\./g, ''); // points
    this.document = this.document.replace(/-/g, ''); // Scripts

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
    return `${this.firstname} ${this.secondname} ${this.firstsurname} ${this.secondsurname}`;
  }

  constructor(partial: Partial<ThirdPerson>) {
    Object.assign(this, partial);
  }
}
