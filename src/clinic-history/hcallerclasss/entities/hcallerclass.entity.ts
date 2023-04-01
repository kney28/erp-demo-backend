import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum Typeallerg {
  RESPIRATORIA = 1,
  ALIMENTOS = 2,
  FÁRMACOS = 3,
  HIMENÓPTEROS = 4,
  MEDICAMENTOS = 5,
  AMBIENTAL = 6,
  ANIMALES = 7,
}

@Entity()
@Unique(['code'])
export class Hcallerclass extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Typeallerg,
    default: Typeallerg.RESPIRATORIA,
  })
  typeallerg: Typeallerg;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
