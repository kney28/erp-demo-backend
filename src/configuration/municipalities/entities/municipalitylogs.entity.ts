import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Municipalitylogs extends BaseEntity {
  @Column()
  value: string;

  @Column()
  type: number;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
