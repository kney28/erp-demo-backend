import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Invcum extends BaseEntity {
  @Column()
  code: string;

  @Column()
  filecum: number;

  @Column()
  actdat: Date;

  @Column()
  inadat: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
