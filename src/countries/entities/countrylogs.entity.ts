import { BaseEntity } from '../../base/baseEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogCountryType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class Countrylogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogCountryType,
  })
  type: LogCountryType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
