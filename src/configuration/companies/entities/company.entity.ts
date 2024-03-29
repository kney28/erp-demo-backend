import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/base/baseEntity';
import { Neighborhood } from 'src/configuration/neighborhoods/entities/neighborhood.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum companyTypes {
  NONE = 0,
  PUBLIC = 1,
  PRIVATE = 2,
}

export enum statusGlobal {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class Company extends BaseEntity {
  @Column()
  name: string;

  @Column({
    default: null
  })
  logo: string;

  @Column()
  legal_representative: string;

  @Column({
    type: 'enum',
    enum: companyTypes,
  })
  company_type: companyTypes;

  @Column()
  @IsEmail()
  email: string;

  @ManyToOne(() => ThirdPerson, (third) => third.thirdPartyAccountant)
  third: ThirdPerson;

  @Column()
  license: string;

  @Column({
    type: 'enum',
    enum: statusGlobal,
  })
  status: statusGlobal;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.detail)
  neighborhood: Neighborhood;
}
