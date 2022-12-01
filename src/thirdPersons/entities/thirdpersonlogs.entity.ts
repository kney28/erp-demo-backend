import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/baseEntity';

export enum LogThirdPersonType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class Thirdpersonlogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogThirdPersonType,
  })
  type: LogThirdPersonType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
