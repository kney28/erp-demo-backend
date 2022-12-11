import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogCostCenterType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
@Entity()
export class CostCenterLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogCostCenterType,
  })
  type: LogCostCenterType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
