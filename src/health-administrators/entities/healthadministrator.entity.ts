import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum HealthAdministratorStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum HealthAdministratorType {
  EPS = 0,
  EAS = 1,
  ARS = 2,
  ARP = 3,
  MP = 4,
  ESE = 5,
  EEPS = 6,
  IPS = 7,
  EMP = 8,
  PPN = 9,
  PPJ = 10,
  OTRAS = 11,
  EPS_S = 12,
}

export enum HealthAdministratorIdentificationType {
  NIT = 1,
  TOWN = 2,
  DEPARTMENT = 3,
  DISTRICT = 4,
}

@Entity()
@Unique(['code'])
export class HealthAdministrator extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;
  /*
  @Column()
  third: number;

  @Column()
  name: string;
  */

  @Column({
    type: 'enum',
    enum: HealthAdministratorType,
  })
  type: HealthAdministratorType;

  @Column()
  descriptiontype: string;

  @Column({
    type: 'enum',
    enum: HealthAdministratorIdentificationType,
  })
  identificationtype: HealthAdministratorIdentificationType;

  @Column()
  identificationtypedescription: string;

  @Column({
    type: 'enum',
    enum: HealthAdministratorStatus,
    default: HealthAdministratorStatus.ACTIVE,
  })
  status: HealthAdministratorStatus;
}
