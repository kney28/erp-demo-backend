import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { Department } from './entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentExistConstraint } from './validations/departments.validations';
import { DepartmentExistUniqueCode } from './validations/departments.validate.unique.code';

@Module({
  imports: [TypeOrmModule.forFeature([Department]), DepartmentsModule],
  controllers: [DepartmentsController],
  providers: [
    DepartmentsService,
    DepartmentExistConstraint,
    DepartmentExistUniqueCode,
  ],
  exports: [DepartmentsService],
})
export class DepartmentsModule {}
