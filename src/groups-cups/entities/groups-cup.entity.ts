import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

@Entity()
@Unique(['code', 'deleted_at'])
export class GroupsCup extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
