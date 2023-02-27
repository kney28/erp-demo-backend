import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum ConceptType {
  NINGUNO = 0,
  CUENTASPORCOBRAR = 1,
  NOTAS = 2,
}

@Entity()
@Unique(['code'])
export class Cxcaccrec extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ConceptType,
    default: ConceptType.NINGUNO,
  })
  typglo: ConceptType;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
