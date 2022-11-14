import { IsNotEmpty } from 'class-validator';

export class CreateNeighborhoodDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: number;
}
