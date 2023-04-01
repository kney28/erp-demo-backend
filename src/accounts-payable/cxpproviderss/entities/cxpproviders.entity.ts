import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';

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

  @ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.cxpproviders, {
    eager: true,
  })
  idthird: ThirdPerson;

  //@ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.cxpproviders, {
  //  eager: true,
  //})
  //thirddocument: ThirdPerson;

  @Column({
    type: 'enum',
    enum: TypeProvider,
    default: TypeProvider.NINGUNO,
  })
  typeprovider: TypeProvider;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.id, {
    eager: true,
  })
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
