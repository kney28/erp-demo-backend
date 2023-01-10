import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogAnnualClosingSeatType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class AnnualClosingSeatLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogAnnualClosingSeatType,
  })
  type: LogAnnualClosingSeatType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
