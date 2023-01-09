import { Module } from '@nestjs/common';
import { AccountingValidityService } from './accountingvalidity.service';
import { AccountingValidityController } from './accountingvalidity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountingValidity } from './entities/accountingvalidity.entity';
import { AccountingValidityLogs } from './entities/accountingvaliditylogs.entity';
import { AccountingValiditySubscriber } from './entities/accountingvalidity.subscribers';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountingValidity]),
    TypeOrmModule.forFeature([AccountingValidityLogs]),
  ],
  controllers: [AccountingValidityController],
  providers: [AccountingValidityService, AccountingValiditySubscriber],
  exports: [AccountingValidityService],
})
export class AccountingValidityModule {}
