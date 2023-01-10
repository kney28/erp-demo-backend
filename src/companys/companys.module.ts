import { Module } from '@nestjs/common';
import { CompanysService } from './companys.service';
import { CompanysController } from './companys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanyLogs } from './entities/companylogs.entity';
import { CompanySubscriber } from './entities/company.subscriber';
import { ThirdPersonModule } from 'src/third-person/third-person.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    TypeOrmModule.forFeature([CompanyLogs]),
    CompanysModule,
    ThirdPersonModule,
  ],
  controllers: [CompanysController],
  providers: [CompanysService, CompanySubscriber],
  exports: [CompanysService],
})
export class CompanysModule {}
