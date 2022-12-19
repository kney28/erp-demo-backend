import { IsNotEmpty } from 'class-validator';
import { ThirdPersonExist } from 'src/thirdPersons/validations/thirdPersons.validate.unique';

export class CreateAccountBalanceDto {
  @IsNotEmpty({
    message: 'El campo mes no puede estar vacio.',
  })
  mes: number;

  @ThirdPersonExist({
    message: 'El id del tercero, no existe.',
  })
  thirdId: number;

  debit: number;
  credit: number;
}
