import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';
export enum statusMunicipality {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
@Unique(['subcode', 'department'])
export class Municipality extends BaseEntity {
  @Column({ nullable: true })
  code: string;

  @Column({ length: 3 })
  subcode: string;

  @Column({ length: 60 })
  description: string;

  @Column()
  department: number;

  @Column({
    type: 'enum',
    enum: statusMunicipality,
    default: statusMunicipality.ACTIVE,
  })
  status: statusMunicipality;

  constructor(
    subcode: string,
    department: number,
    description?: string,
    status?: statusMunicipality,
  );
  constructor(
    subcode: string,
    department: number,
    description: string,
    status?: statusMunicipality,
  );
  constructor(
    subcode: string,
    department: number,
    description: string,
    status: statusMunicipality,
  );
  constructor(
    subcode?: string,
    department?: number,
    description?: string,
    status?: statusMunicipality,
  );
  constructor(
    subcode?: string,
    department?: number,
    description?: string,
    status?: statusMunicipality,
  ) {
    super();
    this.subcode = subcode || '';
    this.description = description || '';
    this.department = department || null;
    this.status = status || statusMunicipality.ACTIVE;
  }
}
