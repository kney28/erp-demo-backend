import { PartialType } from '@nestjs/swagger';
import { CreateProfilesPermissionDto } from './create-profiles-permission.dto';

export class UpdateProfilesPermissionDto extends PartialType(CreateProfilesPermissionDto) {}
