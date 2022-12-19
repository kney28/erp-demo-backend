import { Module } from '@nestjs/common';
import { AccountBalancesService } from './account-balances.service';
import { AccountBalancesController } from './account-balances.controller';
import { AccountBalance } from './entities/account-balance.entity';
import { AccountBalanceLogs } from './entities/account-balanceslogs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountBalanceSubscriber } from './entities/account-balances.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountBalance]),
    TypeOrmModule.forFeature([AccountBalanceLogs]),
  ],
  controllers: [AccountBalancesController],
  providers: [AccountBalancesService, AccountBalanceSubscriber],
})
export class AccountBalancesModule {}
