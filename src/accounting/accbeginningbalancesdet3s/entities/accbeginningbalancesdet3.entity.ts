import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['code'])
export class Accbeginningbalancesdet3 extends BaseEntity {
  @Column()
  code: string;

  @Column()
  idaccoentry: number;

  @Column()
  idconcrete: number;

  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //nature: <define type enum>;

  @Column()
  basevalue: number;

  @Column()
  withholdingperc: number;

  @Column()
  holdvalue: number;

  @Column()
  retainedvalue: number;

  //The next column is ENUM, please complete the code necessary
  //@Column({
  //	type: 'enum',
  //	enum: <define type enum>,
  //	default: <define value of default type enum>,
  //})
  //status: <define type enum>;
}
