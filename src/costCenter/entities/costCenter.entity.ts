import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Careservice } from 'src/billing/careservices/entities/careservice.entity';

export enum CostCenterStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class CostCenter extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: CostCenterStatus,
    default: CostCenterStatus.ACTIVE,
  })
  status: CostCenterStatus;

  @OneToMany(() => Careservice, (careservice) => careservice.costcenter)
	careservices: Careservice[];
}
