import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneralAccountingDto } from './dto/create-generalaccounting.dto';
import { UpdateGeneralAccountingDto } from './dto/update-generalaccounting.dto';
import { GeneralAccounting } from './entities/generalaccounting.entity';

@Injectable()
export class GeneralAccountingService {
  constructor(
    @InjectRepository(GeneralAccounting)
    private generalaccountingRepository: Repository<GeneralAccounting>,
  ) {}
  async create(
    createGeneralAccountingDto: CreateGeneralAccountingDto,
  ): Promise<GeneralAccounting> {
    const generalaccounting: GeneralAccounting =
      this.generalaccountingRepository.create(createGeneralAccountingDto);
    return await this.generalaccountingRepository.save(generalaccounting);
  }

  findAll(): Promise<GeneralAccounting[]> {
    return this.generalaccountingRepository.find();
  }

  findOne(id: string): Promise<GeneralAccounting> {
    return this.generalaccountingRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateGeneralAccountingDto: UpdateGeneralAccountingDto,
  ): Promise<GeneralAccounting> {
    const generalaccounting: GeneralAccounting =
      await this.generalaccountingRepository.findOneBy({ id });
    const editedGeneralAccounting: GeneralAccounting = Object.assign(
      generalaccounting,
      updateGeneralAccountingDto,
    );
    return await this.generalaccountingRepository.save(editedGeneralAccounting);
  }

  async remove(id: string): Promise<GeneralAccounting> {
    const generalaccounting: GeneralAccounting =
      await this.generalaccountingRepository.findOneBy({ id });
    return await this.generalaccountingRepository.softRemove(generalaccounting);
  }
}
