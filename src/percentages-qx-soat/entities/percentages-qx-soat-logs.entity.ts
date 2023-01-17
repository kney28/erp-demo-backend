import { BaseEntity } from '../../base/baseEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogPercentageQXType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class PercentagesQxSoatLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogPercentageQXType,
  })
  type: LogPercentageQXType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
