import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RequirementsListsService } from '../requirements-lists.service';

@ValidatorConstraint({ name: 'RequirementsListExist', async: true })
@Injectable()
export class RequirementsListExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    protected readonly requirementsListsService: RequirementsListsService,
  ) {}
  async validate(id: string) {
    try {
      return await this.requirementsListsService
        .findOne(id)
        .then((requirement) => {
          if (requirement) {
            return true;
          }
          return false;
        });
    } catch (error) {
      return false;
    }
  }
}
export function RequirementsListExist(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RequirementsListExistConstraint,
    });
  };
}
