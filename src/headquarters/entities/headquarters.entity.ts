import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

export enum HeadquartersStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
@Unique(['code'])
export class Headquarters extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;
  /*
  @Column()
  diannumbering: number;

  @Column()
  diannumberingdescription: string;

  @Column()
  healthprovider: number;

  @Column()
  healthproviderdescription: string;
*/
  @Column()
  enablecode: string;
  /*
  @Column()
  accountcancellationpreviousvalidity: number;

  @Column()
  accountsdescription: string;
*/
  @Column({
    type: 'enum',
    enum: HeadquartersStatus,
    default: HeadquartersStatus.ACTIVE,
  })
  status: HeadquartersStatus;
}
