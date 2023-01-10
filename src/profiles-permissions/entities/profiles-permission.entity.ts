import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/baseEntity';

export enum optionsPermissions {
  GENERAL_CONFIGURATION = 1,
  CONFIGURATION_MASTERS_PROFILES = 2,
  CONFIGURATION_MASTERS_USERS = 3,
  CONFIGURATION_MASTERS_COUNTRIES = 4,
}

@Entity()
export class ProfilesPermission extends BaseEntity {
  @Column({
    type: 'enum',
    enum: optionsPermissions,
  })
  option: optionsPermissions;

  @Column({ type: 'bool', nullable: true, default: false })
  add: boolean;

  @Column('bool')
  update: boolean;

  @Column('bool')
  record: boolean;

  @Column('bool')
  consult: boolean;

  @Column('bool')
  delete: boolean;

  @Column('bool')
  print: boolean;

  @Column('bool')
  confirm: boolean;

  @Column('bool')
  process: boolean;

  @Column('bool')
  execute: boolean;

  @Column('bool')
  cancel: boolean;
}
