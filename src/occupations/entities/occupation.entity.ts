import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum OccupationsStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class Occupation extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: OccupationsStatus,
    default: OccupationsStatus.ACTIVE,
  })
  status: OccupationsStatus;
}
