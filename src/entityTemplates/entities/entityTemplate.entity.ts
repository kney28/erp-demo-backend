import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum EntityTemplateStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class EntityTemplate extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: EntityTemplateStatus,
    default: EntityTemplateStatus.ACTIVE,
  })
  status: EntityTemplateStatus;
}
