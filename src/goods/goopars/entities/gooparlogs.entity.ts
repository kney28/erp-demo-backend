import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogGooparType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class GooparLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogGooparType,
  })
  type: LogGooparType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
