import { IsEnum, IsNotEmpty, IsNumberString } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPersonExist } from 'src/third-person/validations/third-person.validate.unique';

import { monthCatalog } from '../entities/account-balance.entity';

export class CreateAccountBalanceDto {
  @IsNotEmpty({
    message: 'El campo mes no puede estar vacio.',
  })
  @IsEnum(monthCatalog)
  month: number;

  @ThirdPersonExist({
    message: 'El id del tercero, no existe.',
  })
  @IsNotEmpty({
    message: 'El campo tercero no puede estar vacio.',
  })
  thirdId: number;

  @IsNotEmpty({
    message: 'El campo débito no puede estar vacio.',
  })
  @IsNumberString()
  debit: number;

  @IsNotEmpty({
    message: 'El campo crédito no puede estar vacio.',
  })
  @IsNumberString()
  credit: number;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
