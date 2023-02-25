import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogHchealthproType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class HchealthproLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogHchealthproType,
  })
  type: LogHchealthproType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
