import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum ValidityStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['year'])
export class Validity extends BaseEntity {
  @Column()
  year: number;

  @Column({
    type: 'decimal',
    scale: 2,
    precision: 11,
    nullable: true,
  })
  minimumsalary: number;

  @Column({
    type: 'decimal',
    scale: 2,
    precision: 11,
    nullable: true,
  })
  uvtvalue: number;

  @Column({
    type: 'enum',
    enum: ValidityStatus,
    default: ValidityStatus.ACTIVE,
  })
  status: ValidityStatus;
}
