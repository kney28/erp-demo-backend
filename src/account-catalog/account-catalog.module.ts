import { Module } from '@nestjs/common';
import { AccountCatalogService } from './account-catalog.service';
import { AccountCatalogController } from './account-catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountCatalog } from './entities/account-catalog.entity';
import { ThirdPersonsModule } from 'src/thirdPersons/thirdPersons.module';
import { AccountCatalogExistConstraint } from './validations/account-catalog.validations.unique';

@Module({
  imports: [TypeOrmModule.forFeature([AccountCatalog]), ThirdPersonsModule],
  controllers: [AccountCatalogController],
  providers: [AccountCatalogService, AccountCatalogExistConstraint],
  exports: [AccountCatalogService],
})
export class AccountCatalogModule {}
