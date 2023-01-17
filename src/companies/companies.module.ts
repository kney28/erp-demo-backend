import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanyLogs } from './entities/companylogs.entity';
import { CompanySubscriber } from './entities/company.subscriber';
import { ThirdPersonModule } from 'src/third-person/third-person.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    TypeOrmModule.forFeature([CompanyLogs]),
    ThirdPersonModule,
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService, CompanySubscriber],
  exports: [CompaniesService],
})
export class CompaniesModule {}
