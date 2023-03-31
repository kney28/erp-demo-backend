import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Preconfigeneral } from 'src/budget/preconfigenerals/entities/preconfigeneral.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum ExpCla {
  APORTESNACIÓNFUNCIONAMIENTO = 1,
  APORTESNACIÓNINVERSIÓN = 2,
  APORTESNACIÓNSERVICIOSDELADEUDA = 3,
  APORTESNACIÓNGASTOSDEPERSONAL = 4,
  APORTESNACIÓNGASTOSGENERALES = 5,
  APORTESNACIÓNMANTENIMIENTOHOSPITALARIO = 6,
  APORTESNACIÓNTRANSFERENCIAS = 7,
  APORTESNACIÓNGASTOSDEOPERACIÓNCOMERCIALYDEPRESTACIÓNDESERVICIOS = 8,
  APORTESNACIÓNDISPONIBILIDADFINAL = 9,
  INGRESOSPROPIOSFUNCIONAMIENTO = 10,
  INGRESOSPROPIOSINVERSIÓN = 11,
  INGRESOSPROPIOSSERVICIOSDELADEUDA = 12,
  INGRESOSPROPIOSGASTOSDEPERSONAL = 13,
  INGRESOSPROPIOSGASTOSGENERALES = 14,
  INGRESOSPROPIOSMANTENIMIENTOHOSPITALARIO = 15,
  INGRESOSPROPIOSTRANSFERENCIAS = 16,
  INGRESOSPROPIOSGASTOSDEOPERACIÓNCOMERCIALYDEPRESTACIÓNDESERVICIOS = 17,
  INGRESOSPROPIOSDISPONIBILIDADFINAL = 18,
}

@Entity()
@Unique(['code'])
export class Pretypexp extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Preconfigeneral, (preConfigeneral) => preConfigeneral.id, {
    eager: true,
  })
  idbudval: number;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ExpCla,
    default: ExpCla.APORTESNACIÓNFUNCIONAMIENTO,
  })
  expcla: ExpCla;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
