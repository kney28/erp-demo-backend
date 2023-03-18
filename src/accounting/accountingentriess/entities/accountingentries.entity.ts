import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Condition {
  SINAPROBAR = 1,
  APROBADO = 2,
  DEROGADO = 3,
}

@Entity()
@Unique(['code'])
export class Accountingentries extends BaseEntity {
  @Column()
  code: string;

  @Column()
  accval: number;

  @Column()
  consecutive: number;

  @Column({
    type: 'enum',
    enum: Condition,
    default: Condition.SINAPROBAR,
  })
  condition: Condition;

  @Column()
  datedocument: Date;

  @Column()
  detail: string;
}
