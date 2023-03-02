import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';

export enum optionPermissions {
  ConfiguracionMaestrosConfiguracionGeneral = 1,
  ConfiguracionMaestrosPerfiles = 2,
  ConfiguracionMaestrosUsuarios = 3,
  ConfiguracionMaestrosPaises = 4,
}

@Entity()
@Unique(['code'])
export class Permissions extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Profile, (profile) => profile.permissions, {
    eager: true,
  })
  profile: Profile;

  //The next column is ENUM, please complete the code necessary
  @Column({
    type: 'enum',
    enum: optionPermissions,
    default: optionPermissions.ConfiguracionMaestrosConfiguracionGeneral,
  })
  option: optionPermissions;

  @Column()
  add: boolean;

  @Column()
  modify: boolean;

  @Column()
  record: boolean;

  @Column()
  query: boolean;

  @Column()
  remove: boolean;

  @Column()
  print: boolean;

  @Column()
  confirm: boolean;

  @Column()
  process: boolean;

  @Column()
  run: boolean;

  @Column()
  override: boolean;
}
