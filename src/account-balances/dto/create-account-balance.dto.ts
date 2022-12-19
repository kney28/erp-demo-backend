import { IsNotEmpty } from "class-validator";

export class CreateAccountBalanceDto {
  @IsNotEmpty({
    message: 'El campo mes no puede estar vacio.',
  })
  mes: number;
}
