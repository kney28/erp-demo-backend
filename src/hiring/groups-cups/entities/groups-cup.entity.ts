import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Column, Entity, Unique, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/base/baseEntity';
import { Parameterizationcups } from 'src/hiring/parameterizationcupss/entities/parameterizationcups.entity';

@Entity()
@Unique(['code', 'deleted_at'])
export class GroupsCup extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;

  @OneToMany(() => Parameterizationcups, (parameterizationCups) => parameterizationCups.group)
	parameterizationCups: Parameterizationcups[];

}
