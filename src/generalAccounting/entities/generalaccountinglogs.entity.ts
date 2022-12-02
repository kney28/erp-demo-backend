import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, ManyToOne } from 'typeorm';

export enum LogGeneralAccountingType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export class GeneralAccountingLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogGeneralAccountingType,
  })
  type: LogGeneralAccountingType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
