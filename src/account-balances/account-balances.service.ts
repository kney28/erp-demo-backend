import { Injectable } from '@nestjs/common';
import { CreateAccountBalanceDto } from './dto/create-account-balance.dto';
import { UpdateAccountBalanceDto } from './dto/update-account-balance.dto';

@Injectable()
export class AccountBalancesService {
  create(createAccountBalanceDto: CreateAccountBalanceDto) {
    return 'This action adds a new accountBalance';
  }

  findAll() {
    return `This action returns all accountBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountBalance`;
  }

  update(id: number, updateAccountBalanceDto: UpdateAccountBalanceDto) {
    return `This action updates a #${id} accountBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountBalance`;
  }
}
