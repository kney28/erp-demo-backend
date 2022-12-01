import { IsEnum, IsNotEmpty } from 'class-validator';
import {
  AccountingValidityInUse,
  AccountingValidityStatus,
} from '../entities/accountingvalidity.entity';

export class CreateAccountingValidityDto {
  @IsNotEmpty()
  validity: number;

  @IsNotEmpty()
  @IsEnum(AccountingValidityStatus)
  status: AccountingValidityStatus;

  @IsNotEmpty()
  @IsEnum(AccountingValidityInUse)
  in_use: AccountingValidityInUse;
}
