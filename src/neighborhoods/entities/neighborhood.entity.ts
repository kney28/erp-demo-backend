import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { Municipality } from 'src/municipalities/entities/municipality.entity';
import { Company } from 'src/companys/entities/company.entity';
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

  @ManyToOne(() => Municipality, (municipality) => municipality.neighborhoods)
  municipality: Municipality;

  @Column({
    type: 'enum',
    enum: statusNeighborhood,
    default: statusNeighborhood.ACTIVE,
  })
  status: statusNeighborhood;

  @OneToMany(() => Company, (company) => company.neighborhood)
  detail: Company[];

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
    this.status = status || statusNeighborhood.ACTIVE;
  }
}
