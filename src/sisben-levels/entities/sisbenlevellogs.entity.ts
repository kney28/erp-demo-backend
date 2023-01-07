import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogSisbenLevelType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class SisbenLevelLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogSisbenLevelType,
  })
  type: LogSisbenLevelType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
