import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum CopaysAndFeesStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class CopaysAndFee extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: CopaysAndFeesStatus,
    default: CopaysAndFeesStatus.ACTIVE,
  })
  status: CopaysAndFeesStatus;
}
