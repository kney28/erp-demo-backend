import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
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
export class Accentsubdet extends BaseEntity {
  @Column()
  code: string;

  @ManyToOne(
    () => RetentionConcept,
    (retentionConcept) => retentionConcept.code,
    {
      eager: true,
    },
  )
  conret: RetentionConcept;

  @Column({
    type: 'enum',
    enum: Nature,
    default: Nature.DEBITO,
  })
  nature: Nature;

  @Column()
  basevalue: number;

  @Column()
  withholdingpercentage: number;

  @Column()
  holdvalue: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
