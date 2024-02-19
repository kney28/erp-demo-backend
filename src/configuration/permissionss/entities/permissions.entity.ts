/* eslint-disable prettier/prettier */
import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Profile } from 'src/configuration/profiles/entities/profile.entity';
import { Erp_modules } from 'src/configuration/erp_moduless/entities/erp_modules.entity'

@Entity()
@Unique(['code'])
export class Permissions extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => Profile, (profile) => profile.permissions, {
    eager: true,
  })
  profile: Profile;

  @ManyToOne(() => Erp_modules, (erp_modules) => erp_modules.permissions, {
    eager: true,
  })
  option: Erp_modules;

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
