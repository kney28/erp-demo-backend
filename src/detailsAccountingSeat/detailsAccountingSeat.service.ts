import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetailsAccountingSeatDto } from './dto/create-detailsAccountingSeat.dto';
import { UpdateDetailsAccountingSeatDto } from './dto/update-detailsAccountingSeat.dto';
import { DetailsAccountingSeat } from './entities/detailsAccountingSeat.entity';

@Injectable()
export class DetailsAccountingSeatService {
  constructor(
    @InjectRepository(DetailsAccountingSeat)
    private detailaccountingseatRepository: Repository<DetailsAccountingSeat>,
  ) {}

  async create(
    createDetailsAccountingSeatDto: CreateDetailsAccountingSeatDto,
  ): Promise<DetailsAccountingSeat> {
    const detailsaccountingseat: DetailsAccountingSeat =
      this.detailaccountingseatRepository.create(
        createDetailsAccountingSeatDto,
      );
    return await this.detailaccountingseatRepository.save(
      detailsaccountingseat,
    );
  }

  findAll(): Promise<DetailsAccountingSeat[]> {
    return this.detailaccountingseatRepository.find();
  }

  findOne(id: string): Promise<DetailsAccountingSeat> {
    return this.detailaccountingseatRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateDetailsAccountingSeatDto: UpdateDetailsAccountingSeatDto,
  ): Promise<DetailsAccountingSeat> {
    const detailsaccountingseat: DetailsAccountingSeat =
      await this.detailaccountingseatRepository.findOneBy({ id });
    const editedDetailsAccountingSeat: DetailsAccountingSeat = Object.assign(
      detailsaccountingseat,
      updateDetailsAccountingSeatDto,
    );
    return await this.detailaccountingseatRepository.save(
      editedDetailsAccountingSeat,
    );
  }

  async remove(id: string): Promise<DetailsAccountingSeat> {
    const detailsaccountingseat: DetailsAccountingSeat =
      await this.detailaccountingseatRepository.findOneBy({ id });
    return await this.detailaccountingseatRepository.softRemove(
      detailsaccountingseat,
    );
  }
}
