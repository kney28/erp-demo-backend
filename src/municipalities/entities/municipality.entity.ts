import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Index, Unique } from 'typeorm';
export enum statusCountry {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
@Unique(['subcode', 'department'])
export class Municipality extends BaseEntity {
  @Column()
  subcode: string;

  @Column({ length: 60 })
  description: string;

  @Column()
  department: number;

  @Column({ type: 'enum', enum: statusCountry, default: statusCountry.ACTIVE })
  status: statusCountry;

  constructor(
    subcode: string,
    department: number,
    description?: string,
    status?: statusCountry,
  );
  constructor(
    subcode: string,
    department: number,
    description: string,
    status?: statusCountry,
  );
  constructor(
    subcode: string,
    department: number,
    description: string,
    status: statusCountry,
  );
  constructor(
    subcode?: string,
    department?: number,
    description?: string,
    status?: statusCountry,
  );
  constructor(
    subcode?: string,
    department?: number,
    description?: string,
    status?: statusCountry,
  ) {
    super();
    this.subcode = subcode || '';
    this.description = description || '';
    this.department = department || null;
    this.status = status || statusCountry.ACTIVE;
  }
}
