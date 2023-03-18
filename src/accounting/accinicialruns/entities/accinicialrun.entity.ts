import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['accval'])
export class Accinicialrun extends BaseEntity {
  @Column()
  accval: number;
}
