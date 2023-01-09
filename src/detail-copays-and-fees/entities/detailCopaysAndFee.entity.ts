import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum DetailCopaysAndFeeType {
  MODERATORFEE = 1,
  COPAY = 2,
  SUBSIDIZEDREGIME = 3,
  LINKED = 4,
}

export enum DetailCopaysAndFeeStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class DetailCopaysAndFee extends BaseEntity {
  /*@Column()
  copaysandfees: number;*/

  @Column({
    type: 'enum',
    enum: DetailCopaysAndFeeType,
  })
  kind: DetailCopaysAndFeeType;

  @Column()
  percentage: number;

  @Column()
  capevent: number;

  @Column()
  annualcap: number;

  @Column({
    type: 'enum',
    enum: DetailCopaysAndFeeStatus,
    default: DetailCopaysAndFeeStatus.ACTIVE,
  })
  status: DetailCopaysAndFeeStatus;
}
