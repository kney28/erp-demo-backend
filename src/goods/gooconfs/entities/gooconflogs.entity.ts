import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogGooconfType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class GooconfLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogGooconfType,
  })
  type: LogGooconfType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
