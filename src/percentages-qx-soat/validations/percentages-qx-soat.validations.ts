import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PercentagesQxSoatService } from '../percentages-qx-soat.service';

@ValidatorConstraint({ name: 'PercentagesQxSoatExist', async: true })
@Injectable()
export class PercentagesQxSoatExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    protected readonly percentagesQxSoatService: PercentagesQxSoatService,
  ) {}
  async validate(id: string) {
    try {
      return await this.percentagesQxSoatService
        .findOne(id)
        .then((percentages) => {
          if (percentages) return true;
          return false;
        });
    } catch (error) {
      return false;
    }
  }
}

export function PercentagesQxSoatExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PercentagesQxSoatExistConstraint,
    });
  };
}
