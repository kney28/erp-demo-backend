import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

export enum monthCatalog {
  JANUARY = 1,
  FEBRUARY = 2,
  MARCH = 3,
  APRIL = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUGUST = 8,
  SEPTEMBER = 9,
  OCTOBER = 10,
  NOVEMBER = 11,
  DECEMBER = 12,
  CLOSE = 13,
  ACCUMULATED = 14,
}

@Entity()
export class AccountBalance extends BaseEntity {
  @Column({
    type: 'enum',
    enum: monthCatalog,
  })
  month: monthCatalog;

  @Column()
  third: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  debit: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  credit: number;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
