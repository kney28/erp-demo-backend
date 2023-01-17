import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { BaseEntity } from 'src/base/baseEntity';
import { PercentagesQxSoat } from 'src/percentages-qx-soat/entities/percentages-qx-soat.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum typePercentages {
  NEITHER = 1,
  SURGEON = 2,
  ANESTHESIOLOGIST = 3,
  SURGICAL_ASSISTANT = 4,
  ROOM_RIGHTS = 5,
  MATERIALS = 6,
}

@Entity()
export class PercentagesQxSoatDetail extends BaseEntity {
  @ManyToOne(() => PercentagesQxSoat, (requirement) => requirement.details)
  percentages_qx_soat: PercentagesQxSoat;

  @Column({
    type: 'enum',
    enum: typePercentages,
  })
  type_percentages: typePercentages;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  percentage_value: number;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;
}
