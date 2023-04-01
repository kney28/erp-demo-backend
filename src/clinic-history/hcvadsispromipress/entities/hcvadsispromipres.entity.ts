import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum Selector {
  SI = 1,
  NO = 2,
}

@Entity()
@Unique(['code'])
export class Hcvadsispromipres extends BaseEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Selector,
    default: Selector.SI,
  })
  enabled: Selector;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
