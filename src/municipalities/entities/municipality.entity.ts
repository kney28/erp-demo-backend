import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';
import { Neighborhood } from 'src/neighborhoods/entities/neighborhood.entity';
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

  @ManyToOne(() => Department, (department) => department.municipalities, {
    eager: true
  })
  department: Department;

  @OneToMany(() => Neighborhood, (neighborhood) => neighborhood.municipality)
  neighborhoods: Municipality[];

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
    this.status = status || statusMunicipality.ACTIVE;
  }
}
