import { BaseEntity } from '../../base/baseEntity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity()
export class SubgroupsCupLogs extends BaseEntity {
  @Column()
  value: string;
  @Column()
  type: number;
  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
