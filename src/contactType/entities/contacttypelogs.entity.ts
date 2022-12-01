import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/baseEntity';

export enum LogContactTypeDate {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class Contacttypelogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogContactTypeDate,
  })
  type: LogContactTypeDate;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
