import { IsEnum, IsNotEmpty } from 'class-validator';
import {
  GeneralAccountingInUse,
  GeneralAccountingMonth,
  GeneralAccountingRounding,
  GeneralAccountingStatus,
} from '../entities/generalaccounting.entity';

export class CreateGeneralAccountingDto {
  @IsNotEmpty()
  validity: number;

  @IsNotEmpty()
  @IsEnum(GeneralAccountingMonth)
  month: GeneralAccountingMonth;

  @IsNotEmpty()
  @IsEnum(GeneralAccountingRounding)
  rounding: GeneralAccountingRounding;

  @IsNotEmpty()
  typeclosingseat: number;

  @IsNotEmpty()
  lostaccount: number;

  @IsNotEmpty()
  utilityaccount: number;

  @IsNotEmpty()
  accountclosing: number;

  @IsNotEmpty()
  @IsEnum(GeneralAccountingInUse)
  in_use: GeneralAccountingInUse;

  @IsNotEmpty()
  @IsEnum(GeneralAccountingStatus)
  status: GeneralAccountingStatus;
}
