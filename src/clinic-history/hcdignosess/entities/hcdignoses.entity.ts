import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeSex {
  NINGUNA = 0,
  FEMENINO = 1,
  MASCULINO = 2,
  AMBOS = 3,
}

@Entity()
@Unique(['code'])
export class Hcdignoses extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;

  @Column()
  lowlimage: number;

  @Column()
  upplimage: number;

  @Column({
    type: 'enum',
    enum: TypeSex,
    default: TypeSex.NINGUNA,
  })
  sex: TypeSex;
}
