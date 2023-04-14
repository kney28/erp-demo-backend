import { Status } from 'src/base/baseEntity';
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
    enum: Status,
  })
  status: Status;

  @OneToMany(() => Parameterizationcups, (parameterizationCups) => parameterizationCups.group)
	parameterizationCups: Parameterizationcups[];

}
