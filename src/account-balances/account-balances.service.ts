import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountBalanceDto } from './dto/create-account-balance.dto';
import { UpdateAccountBalanceDto } from './dto/update-account-balance.dto';
import { AccountBalance } from './entities/account-balance.entity';

@Injectable()
export class AccountBalancesService {
  constructor(
    @InjectRepository(AccountBalance)
    private accountBalanceRepository: Repository<AccountBalance>,
  ) {}
  create(createAccountBalanceDto: CreateAccountBalanceDto) {
    const account: AccountBalance = this.accountBalanceRepository.create(
      createAccountBalanceDto,
    );
    return this.accountBalanceRepository.save(account);
  }

  findAll(): Promise<AccountBalance[]> {
    return this.accountBalanceRepository.find();
  }

  findOne(id: string): Promise<AccountBalance> {
    return this.accountBalanceRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAccountBalanceDto: UpdateAccountBalanceDto,
  ): Promise<AccountBalance> {
    const account: AccountBalance =
      await this.accountBalanceRepository.findOneBy({
        id,
      });

    const editedAccount: AccountBalance = Object.assign(
      account,
      updateAccountBalanceDto,
    );

    return this.accountBalanceRepository.save(editedAccount);
  }

  async remove(id: string): Promise<AccountBalance> {
    const account: AccountBalance =
      await this.accountBalanceRepository.findOneBy({
        id,
      });
    return this.accountBalanceRepository.softRemove(account);
  }
}
