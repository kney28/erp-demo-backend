import { IsEnum, IsNotEmpty } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';

export class CreateFloorDto {
  @IsNotEmpty({
    message: 'El campo código es obligatorio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción es obligatorio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo estado es obligatorio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
