import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum Type {
  NINGUNO = 1,
  ADMINISTRATIVA = 2,
  MEDICA = 3,
}

@Entity()
@Unique(['code'])
export class Hccauserefusrefer extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.NINGUNO,
  })
  type: Type;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
