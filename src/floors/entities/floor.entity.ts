import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';

@Entity()
@Unique(['code', 'deleted_at'])
export class Floor extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: statusGlobal, default: statusGlobal.ACTIVE })
  status: statusGlobal;
}
