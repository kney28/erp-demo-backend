import { IsEnum, IsNotEmpty } from 'class-validator';
import { AccountingSeatStatus } from '../entities/accountingSeat.entity';

export class CreateAccountingSeatDto {
  /*@IsNotEmpty()
  accountingvalidity: number;

  @IsNotEmpty()
  seattype: number;*/

  @IsNotEmpty()
  consecutive: number;

  @IsNotEmpty()
  @IsEnum(AccountingSeatStatus)
  status: AccountingSeatStatus;

  /*@IsNotEmpty()
  documentdate: Date;*/

  @IsNotEmpty()
  detail: string;
}
