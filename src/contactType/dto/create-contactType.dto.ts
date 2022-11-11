import { IsNotEmpty } from 'class-validator';

export class CreateContactTypeDto {
  @IsNotEmpty()
  name: string;
}
