import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';
import { statusCountry } from 'src/countries/entities/country.entity';

@Entity()
@Unique(['code', 'deleted_at'])
export class TypesSeat extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: statusCountry, default: statusCountry.ACTIVE })
  status: statusCountry;

  @Column()
  number: number;
}
