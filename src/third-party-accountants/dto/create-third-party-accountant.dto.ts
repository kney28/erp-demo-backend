import { IsEnum, IsNotEmpty } from 'class-validator';
import {
  selectionCatalog,
  statusGlobal,
} from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPerson } from 'src/third-person/entities/third-person.entity';
import { ThirdPersonExist } from 'src/third-person/validations/third-person.validate.unique';
import {
  taxpayerTypeCatalog,
  withholdingTypeCatalog,
} from '../entities/third-party-accountant.entity';

export class CreateThirdPartyAccountantDto {
  //@ThirdPersonExist({
  //  message: 'El id del tercero, no existe.',
  //})
  //@IsNotEmpty({
  //  message: 'El campo "Tercero" no puede estar vacio.',
  //})
  //third: ThirdPerson;

  //@IsNotEmpty({
  //  message: 'El campo "Tipo contribuyente" no puede estar vacio.',
  //})
  //@IsEnum(taxpayerTypeCatalog)
  //taxpayer_type: number;

  //@IsNotEmpty({
  //  message: 'El campo "Tipo retención" no puede estar vacio.',
  //})
  //@IsEnum(withholdingTypeCatalog)
  //withholding_type: number;

  //@IsNotEmpty({
  //  message: 'El campo "Afectar ICA" no puede estar vacio.',
  //})
  //@IsEnum(selectionCatalog)
  //affect_ICA: number;

  //@IsNotEmpty({
  //  message: 'El campo "Porcentaje ICA" no puede estar vacio.',
  //})
  //percentage_ICA: number;

  //@IsNotEmpty({
  //  message: 'El campo estado no puede estar vacio.',
  //})
  //@IsEnum(statusGlobal)
  //status: statusGlobal;
}
