import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Headquarters } from 'src/headquarters/entities/headquarters.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum EmerOffice {
  SI = 1,
  NO = 2,
}

@Entity()
@Unique(['code'])
export class Appoffices extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  /*@ManyToOne(() => Headquarters, (headquarters) => headquarters.code, {
    eager: true,
  })
  idheadquarters: Headquarters;*/

  @Column({
    type: 'enum',
    enum: EmerOffice,
    default: EmerOffice.NO,
  })
  emeroffice: EmerOffice;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
