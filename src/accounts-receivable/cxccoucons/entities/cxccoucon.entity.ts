import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeGloss {
  NINGUNO = 0,
  FACTURACIÓN = 1,
  TARIFAS = 2,
  SOPORTES = 3,
  AUTORIZACIÓN = 4,
  COBERTURA = 5,
  PERTINENCIA = 6,
  DEVOLUCIÓN = 7,
  RESPUESTA = 8,
}

@Entity()
@Unique(['code'])
export class Cxccoucon extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TypeGloss,
    default: TypeGloss.NINGUNO,
  })
  type: TypeGloss;

  @Column()
  idledacc: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
