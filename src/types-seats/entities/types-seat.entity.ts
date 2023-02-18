import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
//import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Acccongen } from 'src/accounting/acccongens/entities/acccongen.entity';

export enum statusGlobal {
  ACTIVE = 1,
  INACTIVE = 2,
}
@Entity()
@Unique(['code', 'deleted_at'])
export class TypesSeat extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;
  
  @Column({ type: 'enum', enum: statusGlobal, default: statusGlobal.ACTIVE })
  status: statusGlobal;

  @Column()
  number: number;

  @OneToMany(() => Acccongen, (acccongen) => acccongen.seattypeclosure)
  codes: Acccongen[];
}
