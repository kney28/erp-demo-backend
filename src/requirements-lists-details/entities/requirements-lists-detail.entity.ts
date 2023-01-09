import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { RequirementsList } from 'src/requirements-lists/entities/requirements-list.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

@Entity()
@Unique(['code', 'deleted_at'])
export class RequirementsListDetail extends BaseEntity {
  @ManyToOne(() => RequirementsList, (requirement) => requirement.requirements)
  requirements_list: RequirementsList;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  process: string;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
