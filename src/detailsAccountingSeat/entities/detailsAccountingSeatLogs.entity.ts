import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogDetailsAccountingSeatType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class DetailsAccountingSeatLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogDetailsAccountingSeatType,
  })
  type: LogDetailsAccountingSeatType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
