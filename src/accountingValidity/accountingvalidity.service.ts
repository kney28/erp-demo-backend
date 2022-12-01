import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountingValidityDto } from './dto/create-accountingvalidity.dto';
import { UpdateAccountingValidityDto } from './dto/update-accountingvalidity.dto';
import { AccountingValidity } from './entities/accountingvalidity.entity';

@Injectable()
export class AccountingValidityService {
  constructor(
    @InjectRepository(AccountingValidity)
    private accountingvalidityRepository: Repository<AccountingValidity>,
  ) {}
  async create(
    createAccountingValidityDto: CreateAccountingValidityDto,
  ): Promise<AccountingValidity> {
    const accountingvalidity: AccountingValidity =
      this.accountingvalidityRepository.create(createAccountingValidityDto);
    return await this.accountingvalidityRepository.save(accountingvalidity);
  }

  findAll(): Promise<AccountingValidity[]> {
    return this.accountingvalidityRepository.find();
  }

  findOne(id: string): Promise<AccountingValidity> {
    return this.accountingvalidityRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAccountingValidityDto: UpdateAccountingValidityDto,
  ): Promise<AccountingValidity> {
    const accountingvalidity: AccountingValidity =
      await this.accountingvalidityRepository.findOneBy({ id });
    const editedAccountingValidity: AccountingValidity = Object.assign(
      accountingvalidity,
      updateAccountingValidityDto,
    );
    return await this.accountingvalidityRepository.save(
      editedAccountingValidity,
    );
  }

  async remove(id: string) {
    const accountingvalidity: AccountingValidity =
      await this.accountingvalidityRepository.findOneBy({ id });
    return await this.accountingvalidityRepository.softRemove(
      accountingvalidity,
    );
  }
}
