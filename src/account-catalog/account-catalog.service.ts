import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountCatalogDto } from './dto/create-account-catalog.dto';
import { UpdateAccountCatalogDto } from './dto/update-account-catalog.dto';
import { AccountCatalog } from './entities/account-catalog.entity';

@Injectable()
export class AccountCatalogService {
  constructor(
    @InjectRepository(AccountCatalog)
    private accountCatalogsRepository: Repository<AccountCatalog>,
  ) {}

  create(
    createAccountCatalogDto: CreateAccountCatalogDto,
  ): Promise<AccountCatalog> {
    const account: AccountCatalog = this.accountCatalogsRepository.create(
      createAccountCatalogDto,
    );
    return this.accountCatalogsRepository.save(account);
  }

  findAll(): Promise<AccountCatalog[]> {
    return this.accountCatalogsRepository.find();
  }

  findOne(id: string): Promise<AccountCatalog> {
    return this.accountCatalogsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAccountCatalogDto: UpdateAccountCatalogDto,
  ): Promise<AccountCatalog> {
    const account: AccountCatalog =
      await this.accountCatalogsRepository.findOneBy({
        id,
      });
    const editedMunicipality: AccountCatalog = Object.assign(
      account,
      updateAccountCatalogDto,
    );
    return this.accountCatalogsRepository.save(editedMunicipality);
  }

  async remove(id: string): Promise<AccountCatalog> {
    const account: AccountCatalog =
      await this.accountCatalogsRepository.findOneBy({
        id,
      });
    return this.accountCatalogsRepository.softRemove(account);
  }
}
