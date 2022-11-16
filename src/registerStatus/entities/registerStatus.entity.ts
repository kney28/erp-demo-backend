import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

export enum RegisterStatusType {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

@Entity()
export class RegisterStatus extends BaseEntity {
  @Column({
    type: 'enum',
    enum: RegisterStatusType,
  })
  name: RegisterStatusType;
}
