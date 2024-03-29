import { Module } from '@nestjs/common';
import { AccountCatalogService } from './account-catalog.service';
import { AccountCatalogController } from './account-catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountCatalog } from './entities/account-catalog.entity';
import { AccountCatalogExistConstraint } from './validations/account-catalog.validations.unique';
import { AccountCatalogLogs } from './entities/account-cataloglogs.entity';
import { AccountCatalogSubscriber } from './entities/account-catalog.subscriber';
import { ThirdPersonModule } from 'src/third-person/third-person.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountCatalog]),
    ThirdPersonModule,
    TypeOrmModule.forFeature([AccountCatalogLogs]),
  ],
  controllers: [AccountCatalogController],
  providers: [
    AccountCatalogService,
    AccountCatalogExistConstraint,
    AccountCatalogSubscriber,
  ],
  exports: [AccountCatalogService],
})
export class AccountCatalogModule {}
