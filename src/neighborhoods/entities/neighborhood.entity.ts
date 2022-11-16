import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';
export enum statusNeighborhood {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
@Unique(['code', 'municipality'])
export class Neighborhood extends BaseEntity {
  @Column()
  code: string;

  @Column({ length: 60 })
  description: string;

  @Column()
  municipality: number;

  @Column({
    type: 'enum',
    enum: statusNeighborhood,
    default: statusNeighborhood.ACTIVE,
  })
  status: statusNeighborhood;

  constructor(
    code: string,
    municipality: number,
    description?: string,
    status?: statusNeighborhood,
  );
  constructor(
    code: string,
    municipality: number,
    description: string,
    status?: statusNeighborhood,
  );
  constructor(
    code: string,
    municipality: number,
    description: string,
    status: statusNeighborhood,
  );
  constructor(
    code?: string,
    municipality?: number,
    description?: string,
    status?: statusNeighborhood,
  );
  constructor(
    code?: string,
    municipality?: number,
    description?: string,
    status?: statusNeighborhood,
  ) {
    super();
    this.code = code || '';
    this.description = description || '';
    this.municipality = municipality || null;
    this.status = status || statusNeighborhood.ACTIVE;
  }
}
