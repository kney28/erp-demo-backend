import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum DetailsAccountingSeatStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class DetailsAccountingSeat extends BaseEntity {
  @Column()
  accountingseat: number;

  @Column()
  accountingcount: number;

  @Column()
  third: number;

  @Column()
  name: string;

  @Column()
  costcenter: number;

  @Column()
  description: string;

  @Column()
  debitvalue: number;

  @Column()
  creditvalue: number;

  @Column()
  detail: string;

  @Column({
    type: 'enum',
    enum: DetailsAccountingSeatStatus,
    default: DetailsAccountingSeatStatus.ACTIVE,
  })
  status: DetailsAccountingSeatStatus;
}
