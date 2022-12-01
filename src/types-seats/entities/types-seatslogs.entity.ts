import { BaseEntity } from '../../base/baseEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogTypesSeatType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class TypesSeatlogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogTypesSeatType,
  })
  type: LogTypesSeatType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
