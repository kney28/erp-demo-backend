import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { Municipality } from 'src/configuration/municipalities/entities/municipality.entity';
import { Company } from 'src/configuration/companies/entities/company.entity';
import { Patient } from 'src/admissions/patients/entities/patient.entity';
export enum statusNeighborhood {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
@Unique(['code', 'municipality'])
export class Neighborhood extends BaseEntity {
  @Column()
  code: string;

  @Column({ length: 100 })
  description: string;

  @ManyToOne(() => Municipality, (municipality) => municipality.neighborhoods, {
    eager: true
  })
  municipality: Municipality;

  @Column({
    type: 'enum',
    enum: statusNeighborhood,
    default: statusNeighborhood.ACTIVE,
  })
  status: statusNeighborhood;

  @OneToMany(() => Company, (company) => company.neighborhood)
  detail: Company[];

  @OneToMany(() => Patient, (patient) => patient.neighborhood)
  patients: Patient[];

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
