import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum RolType {
  FABRICANTE = 1,
  IMPORTADOR = 2,
}

@Entity()
@Unique(['code'])
export class Invmanufroles extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: RolType,
    default: RolType.FABRICANTE,
  })
  roltype: RolType;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
