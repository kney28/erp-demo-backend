import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountingSeatDto } from './dto/create-accountingSeat.dto';
import { UpdateAccountingSeatDto } from './dto/update-accountingSeat.dto';
import { AccountingSeat } from './entities/accountingSeat.entity';

@Injectable()
export class AccountingSeatsService {
  constructor(
    @InjectRepository(AccountingSeat)
    private accountingseatRepository: Repository<AccountingSeat>,
  ) {}

  async create(
    createAccountingSeatDto: CreateAccountingSeatDto,
  ): Promise<AccountingSeat> {
    const accountingseat: AccountingSeat = this.accountingseatRepository.create(
      createAccountingSeatDto,
    );
    return await this.accountingseatRepository.save(accountingseat);
  }

  findAll(): Promise<AccountingSeat[]> {
    return this.accountingseatRepository.find();
  }

  findOne(id: string): Promise<AccountingSeat> {
    return this.accountingseatRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAccountingSeatDto: UpdateAccountingSeatDto,
  ): Promise<AccountingSeat> {
    const accountingseat: AccountingSeat =
      await this.accountingseatRepository.findOneBy({ id });
    const editedAccountingSeat: AccountingSeat = Object.assign(
      accountingseat,
      updateAccountingSeatDto,
    );
    return await this.accountingseatRepository.save(editedAccountingSeat);
  }

  async remove(id: string): Promise<AccountingSeat> {
    const accountingseat: AccountingSeat =
      await this.accountingseatRepository.findOneBy({ id });
    return await this.accountingseatRepository.softRemove(accountingseat);
  }
}
