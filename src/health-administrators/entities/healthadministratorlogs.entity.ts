import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogHealthAdministratorType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class HealthAdministratorLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogHealthAdministratorType,
  })
  type: LogHealthAdministratorType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
