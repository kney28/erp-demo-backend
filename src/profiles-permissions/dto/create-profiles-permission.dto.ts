import { IsBoolean, IsEnum, IsNotEmpty } from 'class-validator';
import { optionsPermissions } from '../entities/profiles-permission.entity';

export class CreateProfilesPermissionDto {
  @IsNotEmpty({
    message: 'El campo opción no puede estar vacio.',
  })
  @IsEnum(optionsPermissions)
  option: optionsPermissions;

  @IsBoolean()
  add: boolean;

  @IsBoolean()
  update: boolean;

  @IsBoolean()
  record: boolean;

  @IsBoolean()
  consult: boolean;

  @IsBoolean()
  delete: boolean;

  @IsBoolean()
  print: boolean;

  @IsBoolean()
  confirm: boolean;

  @IsBoolean()
  process: boolean;

  @IsBoolean()
  execute: boolean;

  @IsBoolean()
  cancel: boolean;
}
