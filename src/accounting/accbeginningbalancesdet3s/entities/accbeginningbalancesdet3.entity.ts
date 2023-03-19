import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { AccountingSeat } from 'src/accountingSeats/entities/accountingSeat.entity';
import { RetentionConcept } from 'src/retention-concepts/entities/retention-concept.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum Nature {
  DEBITO = 1,
  CREDITO = 2,
}

@Entity()
@Unique(['code'])
export class Accbeginningbalancesdet3 extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(() => AccountingSeat, (accountingSeat) => accountingSeat.detail, {
    eager: true,
  })
  idaccoentry: AccountingSeat;

  @ManyToOne(
    () => RetentionConcept,
    (retentionConcept) => retentionConcept.description,
    {
      eager: true,
    },
  )
  idconcrete: RetentionConcept;

  @Column({
    type: 'enum',
    enum: Nature,
    default: Nature.DEBITO,
  })
  nature: Nature;

  @Column()
  basevalue: number;

  @Column()
  withholdingperc: number;

  @Column()
  holdvalue: number;

  @Column()
  retainedvalue: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
