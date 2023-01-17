import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { Neighborhood } from 'src/neighborhoods/entities/neighborhood.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { ThirdPersonExist } from 'src/third-person/validations/third-person.validate.unique';
import { companyTypes } from '../entities/company.entity';

export class CreateCompanyDto {
  @IsNotEmpty({
    message: 'El campo "Nombre" no puede estar vacio.',
  })
  name: string;

  @IsNotEmpty({
    message: 'El campo "Barrio" no puede estar vacio.',
  })
  neighborhood: Neighborhood;

  @IsNotEmpty({
    message: 'El campo "Representante legal" no puede estar vacio.',
  })
  legal_representative: string;

  @IsNotEmpty({
    message: 'El campo "Tipo de compañia" no puede estar vacio.',
  })
  @IsEnum(companyTypes)
  company_type: companyTypes;

  @IsNotEmpty({
    message: 'El campo "Correo electrónico" no puede estar vacio.',
  })
  @IsEmail()
  email: string;

  @ThirdPersonExist({
    message: 'El id del tercero, no existe.',
  })
  @IsNotEmpty({
    message: 'El campo "Tercero" no puede estar vacio.',
  })
  third: ThirdPerson;

  @IsNotEmpty({
    message: 'El campo "Licencia" no puede estar vacio.',
  })
  license: string;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
