import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Validity } from 'src/configuration/validity/entities/validity.entity';
import { User } from 'src/users/entities/user.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum StatusValidity {
  ABIERTO = 1,
  ACTIVO = 2,
  ENCIERRE = 3,
  CERRADO = 4,
}

export enum Selection {
  SI = 1,
  NO = 2,
}

export enum StateDocument {
  SINAPROBAR = 1,
  APROBADO = 2,
  ANULADO = 3,
}

@Entity()
@Unique(['code'])
export class Preconfigeneral extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Validity, (validity) => validity.status, {
    eager: true,
  })
  idvalidity: Validity;

  @Column({
    type: 'enum',
    enum: StatusValidity,
    default: StatusValidity.ABIERTO,
  })
  statusvalidity: StatusValidity;

  @Column()
  datdec: Date;

  @Column()
  decnum: string;

  @Column()
  budval: number;

  @Column()
  section: string;

  @Column()
  unitexe: string;

  @Column({
    type: 'enum',
    enum: Selection,
    default: Selection.SI,
  })
  conannprobox: Selection;

  @Column({
    type: 'enum',
    enum: StateDocument,
    default: StateDocument.ANULADO,
  })
  stabudproinc: StateDocument;

  @Column()
  incbudprodat: Date;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  idusedubproinc: User;

  @Column({
    type: 'enum',
    enum: StateDocument,
    default: StateDocument.ANULADO,
  })
  stabudproexp: StateDocument;

  @Column()
  budprodatexp: Date;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  idusebudproexp: number;

  @Column({
    type: 'enum',
    enum: StateDocument,
    default: StateDocument.ANULADO,
  })
  staannprocasinc: StateDocument;

  @Column()
  datannprocasinc: Date;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  iduseannproincbox: User;

  @Column({
    type: 'enum',
    enum: StateDocument,
    default: StateDocument.ANULADO,
  })
  staannproboxexp: StateDocument;

  @Column()
  datannproboxexp: number;

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  iduseannproboxexp: User;

  @Column({
    type: 'enum',
    enum: Selection,
    default: Selection.SI,
  })
  nuse: Selection;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
