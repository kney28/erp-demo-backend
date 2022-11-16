import { IsNotEmpty } from 'class-validator';

export class CreateRegisterStatusDto {
  @IsNotEmpty()
  name: string;
}
