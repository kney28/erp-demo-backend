import { IsNotEmpty } from 'class-validator';

export class CreateThirdPersonDto {
  @IsNotEmpty()
  socialreason: string;

  @IsNotEmpty()
  documenttype: string;

  @IsNotEmpty()
  document: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  secondname: string;

  @IsNotEmpty()
  firstsurname: string;

  @IsNotEmpty()
  secondsurname: string;

  @IsNotEmpty()
  legalnature: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  user: string;
}
