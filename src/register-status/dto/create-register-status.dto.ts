import { IsNotEmpty } from 'class-validator';

export class CreateRegisterStatusDto {
  @IsNotEmpty()
  Id: string;

  @IsNotEmpty()
  name: string;
}
