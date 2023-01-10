import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { RequirementsListDetail } from 'src/requirements-lists-details/entities/requirements-lists-detail.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

@Entity()
@Unique(['code', 'deleted_at'])
export class RequirementsList extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;

  @OneToMany(
    () => RequirementsListDetail,
    (requirement) => requirement.requirements_list,
  )
  requirements: RequirementsListDetail[];
}
