import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeProvider {
  NINGUNO = 0,
  PRODUCTOS = 1,
  SERVICIOS = 2,
  AMBOS = 3,
}

@Entity()
@Unique(['code'])
export class Cxpproviders extends BaseEntity {
  @Column()
  code: string;

  @Column()
  idthird: number;

  @Column()
  thirddocument: string;

  @Column({
    type: 'enum',
    enum: TypeProvider,
    default: TypeProvider.NINGUNO,
  })
  typeprovider: TypeProvider;

  @Column()
  idledacc: number;

  @Column()
  idecoact: number;

  @Column()
  ecoactper: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
