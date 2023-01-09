import { IsEnum, IsNotEmpty } from 'class-validator';
import { statusGlobal } from 'src/account-catalog/entities/account-catalog.entity';
import { RequirementsList } from 'src/requirements-lists/entities/requirements-list.entity';
import { RequirementsListExist } from 'src/requirements-lists/validations/requirements-lists.validate.unique';

export class CreateRequirementsListsDetailDto {
  @IsNotEmpty({
    message: 'El campo "Listado de requisitos" no puede estar vacio.',
  })
  @RequirementsListExist({
    message: 'El id de la lista de requisitos, no existe.',
  })
  requirements_list: RequirementsList;

  @IsNotEmpty({
    message: 'El campo código no puede estar vacio.',
  })
  code: string;

  @IsNotEmpty({
    message: 'El campo descripción no puede estar vacio.',
  })
  description: string;

  @IsNotEmpty({
    message: 'El campo descripción no puede estar vacio.',
  })
  process: string;

  @IsNotEmpty({
    message: 'El campo estado no puede estar vacio.',
  })
  @IsEnum(statusGlobal)
  status: statusGlobal;
}
