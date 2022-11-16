import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DepartmentsService } from 'src/departments/departments.service';
@ValidatorConstraint({ name: 'DepartmentExist', async: true })
@Injectable()
export class DepartmentExistConstraint implements ValidatorConstraintInterface {
  constructor(protected readonly departmentsService: DepartmentsService) {}
  async validate(id: string) {
    try {
      return await this.departmentsService.findOne(id).then((department) => {
        if (department) return true;
        return false;
      });
    } catch (error) {
      return false;
    }
  }
}

export function DepartmentExist(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DepartmentExistConstraint,
    });
  };
}
