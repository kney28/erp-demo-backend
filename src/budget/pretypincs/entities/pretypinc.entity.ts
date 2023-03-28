import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Preconfigeneral } from 'src/budget/preconfigenerals/entities/preconfigeneral.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum ClasInc {
  APORTESNACIÓN = 1,
  INGRESOSPROPIOS = 2,
  DISPONIBILIDADINICIAL = 3,
  VENTASERVICIOS = 4,
  SISTEMAGENERALPARTICIPACIONES = 5,
}

@Entity()
@Unique(['code'])
export class Pretypinc extends BaseEntity {
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
    enum: ClasInc,
    default: ClasInc.APORTESNACIÓN,
  })
  clasinc: ClasInc;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
