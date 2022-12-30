import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { selectionCatalog } from 'src/account-catalog/entities/account-catalog.entity';
import { ThirdPersonService } from 'src/third-person/third-person.service';

@ValidatorConstraint({ name: 'ThirdPersonExist', async: true })
@Injectable()
export class ThirdPersonExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(protected readonly thirdPersonsService: ThirdPersonService) {}
  async validate(id: string, args: ValidationArguments) {
    try {
      const data = JSON.stringify(args.object);
      const dataJson = JSON.parse(data);
      if (dataJson.transferThirdParties == selectionCatalog.YES && !id) {
        return false;
      }
      if (!id) {
        return true;
      }
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
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ThirdPersonExistConstraint,
    });
  };
}
