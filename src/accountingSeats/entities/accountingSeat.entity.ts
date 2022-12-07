import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum AccountingSeatStatus {
  WITHOUTAPPROVING = 1,
  APPROVED = 2,
  REPEALED = 3,
}

@Entity()
export class AccountingSeat extends BaseEntity {
  @Column()
  accountingvalidity: number;

  @Column()
  seattype: number;

  @Column()
  consecutive: number;

  @Column({
    type: 'enum',
    enum: AccountingSeatStatus,
    default: AccountingSeatStatus.WITHOUTAPPROVING,
  })
  status: AccountingSeatStatus;

  @Column()
  documentdate: Date;

  @Column()
  detail: string;
}
