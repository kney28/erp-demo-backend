import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Goopar extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  idactacc: number;

  @Column()
  idadmdepacc: number;

  @Column()
  idweldepacc: number;

  @Column()
  idaccdepacc: number;

  @Column()
  idaccmovgoowar: number;

  @Column()
  idacclos: number;

  @Column()
  idaccoutusedue: number;

  @Column()
  idacccomowe: number;

  @Column()
  idcrecomacc: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
