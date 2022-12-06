import { IsNotEmpty } from "class-validator";

export class CreateComplementDto {
  @IsNotEmpty()
  name: string
}
