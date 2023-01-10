import { IsEnum, IsNotEmpty } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { PercentagesQxSoat } from 'src/percentages-qx-soat/entities/percentages-qx-soat.entity';
import { PercentagesQxSoatExist } from 'src/percentages-qx-soat/validations/percentages-qx-soat.validations';

export class CreatePercentagesQxSoatDetailDto {
  @IsNotEmpty({
    message: 'El campo "Listado de requisitos" no puede estar vacio.',
  })
  @PercentagesQxSoatExist({
    message: 'El id del porcentaje QX SOAT, no existe.',
  })
  percentages_qx_soat: PercentagesQxSoat;

  @IsNotEmpty({
    message: 'El campo "Tipo de porcentaje" no puede estar vacio.',
  })
  type_percentages: number;

  @IsNotEmpty({
    message: 'El campo "Porcentaje de la QX SOAT" no puede estar vacio.',
  })
  percentage_value: number;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
