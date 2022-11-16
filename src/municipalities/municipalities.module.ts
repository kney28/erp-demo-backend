import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { MunicipalitiesController } from './municipalities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipality } from './entities/municipality.entity';
import { DepartmentsModule } from 'src/departments/departments.module';
import { MunicipalityExistConstraint } from 'src/neighborhoods/neighborhoods.validations';
@Module({
  imports: [TypeOrmModule.forFeature([Municipality]), DepartmentsModule],
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService, MunicipalityExistConstraint],
  exports: [MunicipalitiesService],
})
export class MunicipalitiesModule {}
