import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DepartmentsService } from 'src/configuration/departments/departments.service';
@ValidatorConstraint({ name: 'DepartmentExistCode', async: true })
@Injectable()
export class DepartmentExistUniqueCode implements ValidatorConstraintInterface {
  constructor(protected readonly departmentsService: DepartmentsService) {}
  async validate(code: string) {
    try {
      return await this.departmentsService
        .findOneByCodigo(code)
        .then((department) => {
          if (department) return false;
          return true;
        });
    } catch (error) {
      return false;
    }
  }
}

export function DepartmentExistCode(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DepartmentExistUniqueCode,
    });
  };
}
