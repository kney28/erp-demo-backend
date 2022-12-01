import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogAccountingValidityType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
@Entity()
export class AccountingValidityLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogAccountingValidityType,
  })
  type: LogAccountingValidityType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
