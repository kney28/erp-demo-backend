import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity'

export enum ProfilesStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Profile extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ProfilesStatus,
    default: ProfilesStatus.ACTIVE,
  })
  status: ProfilesStatus;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @OneToMany(() => Permissions, (permissions) => permissions.profile)
  permissions: Permissions[];
  
}
