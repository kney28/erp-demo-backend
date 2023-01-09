import { IsEnum, IsNotEmpty, IsNumberString } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';

export class CreateRetentionConceptDto {
  @IsNotEmpty({
    message: 'El campo código no puede estar vacio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción no puede estar vacio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo base no puede estar vacio.',
  })
  @IsNumberString()
  base: number;

  @IsNotEmpty({
    message: 'El campo porcentaje no puede estar vacio.',
  })
  @IsNumberString()
  percentage: number;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
