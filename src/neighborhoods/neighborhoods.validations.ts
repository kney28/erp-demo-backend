import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { MunicipalitiesService } from 'src/municipalities/municipalities.service';

@ValidatorConstraint({ name: 'MunicipalityExist', async: true })
@Injectable()
export class MunicipalityExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    protected readonly municipalitiesService: MunicipalitiesService,
  ) {}
  async validate(id: string) {
    try {
      return await this.municipalitiesService
        .findOne(id)
        .then((municipality) => {
          if (municipality) return true;
          return false;
        });
    } catch (error) {
      return false;
    }
  }
}

export function MunicipalityExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: MunicipalityExistConstraint,
    });
  };
}
