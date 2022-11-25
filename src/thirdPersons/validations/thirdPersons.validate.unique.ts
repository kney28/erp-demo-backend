import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ThirdPersonsService } from '../thirdPersons.service';

@ValidatorConstraint({ name: 'ThirdPersonExist', async: true })
@Injectable()
export class ThirdPersonExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(protected readonly thirdPersonsService: ThirdPersonsService) {}
  async validate(id: string) {
    try {
      return await this.thirdPersonsService.findOneById(id).then((third) => {
        if (third) return true;
        return false;
      });
    } catch (error) {
      return false;
    }
  }
}

export function ThirdPersonExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ThirdPersonExistConstraint,
    });
  };
}
