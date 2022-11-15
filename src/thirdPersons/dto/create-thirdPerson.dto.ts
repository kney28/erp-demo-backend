import { IsNotEmpty } from 'class-validator';
export class CreateThirdPersonDto {
  @IsNotEmpty()
  socialreason: string;

  @IsNotEmpty()
  document: string;

  @IsNotEmpty()
  firstname: string;

  secondname: string;

  @IsNotEmpty()
  firstsurname: string;

  @IsNotEmpty()
  secondsurname: string;
}
