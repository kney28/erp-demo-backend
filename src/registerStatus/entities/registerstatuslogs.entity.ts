import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/baseEntity';

export enum LogRegisterStatusDate {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class Registerstatuslogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogRegisterStatusDate,
  })
  type: LogRegisterStatusDate;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
