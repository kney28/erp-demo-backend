import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountCatalog } from 'src/account-catalog/entities/account-catalog.entity';
export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeGloss {
  NINGUNO = 1,
  FACTURACION = 2,
  TARIFAS = 3,
  AUTORIZACION = 4,
  COBERTURA = 5,
  PERTINENCIA = 6,
  DEVOLUCION = 7,
  RESPUESTA = 8,
}

@Entity()
@Unique(['code'])
export class Cxcaccrec extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @ManyToOne(() => AccountCatalog, (accountCatalog) => accountCatalog.account, {
    eager: true,
  })
  idactacc: AccountCatalog;

  @Column({
    type: 'enum',
    enum: TypeGloss,
    default: TypeGloss.NINGUNO,
  })
  typglo: TypeGloss;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
