import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { PercentagesQxSoatDetail } from 'src/percentages-qx-soat-detail/entities/percentages-qx-soat-detail.entity';
// import { PercentagesQxSoatDetail } from 'src/percentages-qx-soat-detail/entities/percentages-qx-soat-detail.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

export enum groupQX {
  GROUP_02 = 1,
  GROUP_03 = 2,
  GROUP_04 = 3,
  GROUP_05 = 4,
  GROUP_06 = 5,
  GROUP_07 = 6,
  GROUP_08 = 7,
  GROUP_09 = 8,
  GROUP_10 = 9,
  GROUP_11 = 10,
  GROUP_12 = 11,
  GROUP_13 = 12,
  GROUP_SPECIAL_20 = 13,
  GROUP_SPECIAL_21 = 14,
  GROUP_SPECIAL_22 = 15,
  GROUP_SPECIAL_23 = 16,
}

@Entity()
@Unique(['code', 'deleted_at'])
export class PercentagesQxSoat extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: groupQX,
  })
  group_qx: groupQX;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;

  @OneToMany(
    () => PercentagesQxSoatDetail,
    (percentages) => percentages.percentages_qx_soat,
  )
  details: PercentagesQxSoatDetail[];
}
