import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogCopaysAndFeesType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class CopaysAndFeesLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogCopaysAndFeesType,
  })
  type: LogCopaysAndFeesType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
