import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { Hcspecialties } from 'src/clinic-history/hcspecialtiess/entities/hcspecialties.entity';

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum TypeProf {
  MÉDICOGENERAL = 1,
  MÉDICOESPECIALISTA = 2,
  ENFERMERA = 3,
  AUXILIARDEENFERMERÍA = 4,
  ODONTÓLOGOGENERAL = 5,
  ODONTÓLOGOESPECIALISTA = 6,
  HIGIENISTA = 7,
  NUTRICIONISTA = 8,
  PSICOLOGÍA = 9,
  TRABAJADORASOCIAL = 10,
  BACTERIÓLOGO = 11,
  TERAPISTA = 12,
  OPTÓMETRA = 13,
  QUÍMICOFARMACÉUTICO = 14,
}

export enum TypeCont {
  VINCULACIÓNLEGALYREGLAMENTARIA = 1,
  CONTRATODEPRESTACIÓNDESERVICIOS = 2,
  TERCERIZACIÓNLABORAL = 3,
  CONTRATOINDIVIDUALDETRABAJO = 4,
  CONTRATOCOLECTIVODETRABAJO = 5,
}

@Entity()
@Unique(['code'])
export class Hchealthpro extends BaseEntity {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TypeProf,
    default: TypeProf.MÉDICOGENERAL,
  })
  typheapro: TypeProf;

  @ManyToOne(() => ThirdPerson, (thirdPerson) => thirdPerson.account, {
    eager: true,
  })
  idthird: ThirdPerson;

  @Column()
  businesscard: string;

  @Column({
    type: 'enum',
    enum: TypeCont,
    default: TypeCont.CONTRATOCOLECTIVODETRABAJO,
  })
  conttyp: TypeCont;

  @ManyToOne(() => Hcspecialties, (hcSpecialties) => hcSpecialties.code, {
    eager: true,
  })
  idspecialty: Hcspecialties;

  @Column()
  digsig: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
