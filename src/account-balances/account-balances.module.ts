import { Module } from '@nestjs/common';
import { AccountBalancesService } from './account-balances.service';
import { AccountBalancesController } from './account-balances.controller';

@Module({
  controllers: [AccountBalancesController],
  providers: [AccountBalancesService]
})
export class AccountBalancesModule {}
