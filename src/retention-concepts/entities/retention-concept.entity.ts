import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Column, Entity, Unique } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

@Entity()
@Unique(['code', 'deleted_at'])
export class RetentionConcept extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  base: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  percentage: number;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
