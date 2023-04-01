import { IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from 'src/base/baseEntity';

export class CreateGroupsCupDto {
  @IsNotEmpty({
    message: 'El campo código no puede estar vacio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción no puede estar vacio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(Status)
  status: Status;
}
