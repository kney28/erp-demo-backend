import { IsEnum, IsNotEmpty } from 'class-validator';
import { ThirdPersonExist } from 'src/thirdPersons/validations/thirdPersons.validate.unique';
import { Unique } from 'typeorm';
import {
  affectsRetentionCatalog,
  availabilityTypeCatalog,
  classCatalog,
  levelCatalog,
  selectionCatalog,
  statusGlobal,
} from '../entities/account-catalog.entity';
import { AccountCatalogExist } from '../validations/account-catalog.validations.unique';

export class CreateAccountCatalogDto {
  @AccountCatalogExist({
    message: 'El id de la cuenta contable, no existe.',
  })
  accountCatalogId: number;

  @IsNotEmpty({
    message: 'El campo código no puede estar vacio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción no puede estar vacio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo nivel no puede estar vacio.',
  })
  @IsEnum(levelCatalog)
  level: levelCatalog;

  @IsNotEmpty({
    message: 'El campo clase no puede estar vacio.',
  })
  @IsEnum(classCatalog)
  class: classCatalog;

  @IsNotEmpty({
    message: 'El campo tipo disponibilidad no puede estar vacio.',
  })
  @IsEnum(availabilityTypeCatalog)
  availabilityType: availabilityTypeCatalog;

  @IsNotEmpty({
    message: 'El campo afecta terceros no puede estar vacio.',
  })
  @IsEnum(selectionCatalog)
  affectsThirdParties: selectionCatalog;

  @IsNotEmpty({
    message: 'El campo afecta centros de costo no puede estar vacio.',
  })
  @IsEnum(selectionCatalog)
  affectsCostCenters: selectionCatalog;

  @IsNotEmpty({
    message: 'El campo traslado terceros no puede estar vacio.',
  })
  @IsEnum(selectionCatalog)
  transferThirdParties: selectionCatalog;

  @ThirdPersonExist({
    message: 'El id del tercero, no existe.',
  })
  thirdId: number;

  @IsNotEmpty({
    message: 'El campo afecta retención no puede estar vacio.',
  })
  @IsEnum(affectsRetentionCatalog)
  affectsRetention: affectsRetentionCatalog;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
