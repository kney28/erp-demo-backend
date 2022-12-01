import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AccountCatalogService } from '../account-catalog.service';

@ValidatorConstraint({ name: 'AccountCatalogExist', async: true })
@Injectable()
export class AccountCatalogExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(
    protected readonly accountCatalogService: AccountCatalogService,
  ) {}
  async validate(id: string) {
    try {
      return await this.accountCatalogService
        .findOne(id)
        .then((accountCatalog) => {
          if (accountCatalog) return true;
          return false;
        });
    } catch (error) {
      return false;
    }
  }
}

export function AccountCatalogExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: AccountCatalogExistConstraint,
    });
  };
}
