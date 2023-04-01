import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Patient } from 'src/admissions/patients/entities/patient.entity';
export enum statusCountry {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
@Unique(['code', 'deleted_at'])
export class Country extends BaseEntity {
  @Column()
  code: string;

  @Column({ length: 60 })
  description: string;

  @Column({ type: 'enum', enum: statusCountry, default: statusCountry.ACTIVE })
  status: statusCountry;

  constructor(code: string, description?: string, status?: statusCountry);
  constructor(code: string, description: string, status?: statusCountry);
  constructor(code: string, description: string, status: statusCountry);
  constructor(code?: string, description?: string, status?: statusCountry);
  constructor(code?: string, description?: string, status?: statusCountry) {
    super();
    this.code = code || '';
    this.description = description || '';
    this.status = status || statusCountry.ACTIVE;
  }

  @OneToMany(() => Patient, (patient) => patient.country)
  patients: Patient[];
}
