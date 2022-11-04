import { IsNotEmpty } from 'class-validator';

export class CreateSocialDto {
  @IsNotEmpty()
  name: string;
}
