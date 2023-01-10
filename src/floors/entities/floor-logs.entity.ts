import { BaseEntity } from '../../base/baseEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum logs {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class FloorLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: logs,
  })
  type: logs;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
