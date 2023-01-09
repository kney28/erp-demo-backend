import { IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import {
  AddressComplement1,
  AddressComplement2,
  AddressLetter,
  AddressSelection,
  AddresStatus,
  AddressType,
  AddressWayType,
} from '../entities/address.entity';

export class CreateAddressDto {
  /*@IsNotEmpty()
  third: number;*/

  @IsNotEmpty()
  @IsEnum(AddressType)
  addresstype: AddressType;

  /*@IsNotEmpty()
  town: number;*/

  @IsNotEmpty()
  @IsEnum(AddressWayType)
  waytype: AddressWayType;

  @IsOptional()
  @Min(0)
  number1: number;

  @IsNotEmpty()
  @IsEnum(AddressLetter)
  letter1: AddressLetter;

  @IsNotEmpty()
  @IsEnum(AddressComplement1)
  complement1: AddressComplement1;

  @IsOptional()
  @Min(0)
  number2: number;

  @IsNotEmpty()
  @IsEnum(AddressLetter)
  letter2: AddressLetter;

  @IsNotEmpty()
  @IsEnum(AddressComplement1)
  complement2: AddressComplement1;

  @IsOptional()
  @Min(0)
  number3: number;

  @IsNotEmpty()
  @IsEnum(AddressComplement2)
  complement3: AddressComplement2;

  @IsNotEmpty()
  complement4: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  validaddress: string;

  @IsNotEmpty()
  @IsEnum(AddressSelection)
  mainaddress: AddressSelection;

  @IsNotEmpty()
  @IsEnum(AddresStatus)
  status: AddresStatus;
}
