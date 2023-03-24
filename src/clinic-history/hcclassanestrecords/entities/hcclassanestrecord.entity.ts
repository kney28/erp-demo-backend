import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeAnesthesia {
  LOCAL = 1,
  REGIONALANESTESIAEPIDURALANESTESIAESPINAL = 2,
  REGIONALANESTESIAMEDIANTEBLOQUEONERVIOSPERIFÉRICOS = 3,
  GENERAL = 4,
}

@Entity()
@Unique(['code'])
export class Hcclassanestrecord extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TypeAnesthesia,
    default: TypeAnesthesia.LOCAL,
  })
  typeanesthesia: TypeAnesthesia;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
