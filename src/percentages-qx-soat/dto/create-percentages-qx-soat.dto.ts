import { IsEnum, IsNotEmpty } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { groupQX } from '../entities/percentages-qx-soat.entity';

export class CreatePercentagesQxSoatDto {
  @IsNotEmpty({
    message: 'El campo "Código" no puede estar vacio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo "Descripción" no puede estar vacio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo "Grupo QX" no puede estar vacio.',
  })
  @IsEnum(groupQX)
  group_qx: groupQX;

  @IsNotEmpty({
    message: 'El campo "estado" no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
