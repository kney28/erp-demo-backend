import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Goocla } from 'src/goods/gooclas/entities/goocla.entity';
import { Goopar } from 'src/goods/goopars/entities/goopar.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeGoods {
  MUEBLE = 1,
  INMUEBLE = 2,
}

export enum ResidualValueType {
  VALOR = 1,
  PORCENTAJE = 2,
}

export enum GenDep {
  SI = 1,
  NO = 2,
}

export enum TypeUsefulLife {
  AÑOS = 1,
  MESES = 2,
}

@Entity()
@Unique(['code'])
export class Gooconf extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @ManyToOne(() => Goocla, (goocla) => goocla.code, {
    eager: true,
  })
  idgoocla: Goocla;

  @ManyToOne(() => Goopar, (goopar) => goopar.code, {
    eager: true,
  })
  idaccpar: Goopar;

  @Column({
    type: 'enum',
    enum: TypeGoods,
    default: TypeGoods.MUEBLE,
  })
  tipgoo: TypeGoods;

  @Column({
    type: 'enum',
    enum: ResidualValueType,
    default: ResidualValueType.PORCENTAJE,
  })
  resvaltyp: ResidualValueType;

  @Column({
    type: 'enum',
    enum: TypeUsefulLife,
    default: TypeUsefulLife.AÑOS,
  })
  typuselif: TypeUsefulLife;

  @Column({
    type: 'enum',
    enum: GenDep,
    default: GenDep.NO,
  })
  gendep: GenDep;

  @Column()
  uselif: number;

  @Column()
  coniva: number;

  @Column()
  resval: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
