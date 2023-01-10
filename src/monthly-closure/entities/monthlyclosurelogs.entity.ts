import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogMonthlyClosureType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class MonthlyClosureLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogMonthlyClosureType,
  })
  type: LogMonthlyClosureType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
