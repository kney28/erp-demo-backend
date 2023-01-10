import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogMonthlyOpeningType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class MonthlyOpeningLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogMonthlyOpeningType,
  })
  type: LogMonthlyOpeningType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
