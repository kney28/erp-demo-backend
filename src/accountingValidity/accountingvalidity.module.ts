import { Module } from '@nestjs/common';
import { AccountingValidityService } from './accountingvalidity.service';
import { AccountingValidityController } from './accountingvalidity.controller';

@Module({
  controllers: [AccountingValidityController],
  providers: [AccountingValidityService]
})
export class AccountingValidityModule {}
