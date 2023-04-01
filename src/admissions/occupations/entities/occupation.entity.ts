import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { Patient } from 'src/admissions/patients/entities/patient.entity';

export enum OccupationsStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
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

  @OneToMany(() => Patient, (patient) => patient.occupation)
  patients: Patient[];
}
