import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetailCopaysAndFeeDto } from './dto/create-detailCopaysAndFee.dto';
import { UpdateDetailCopaysAndFeeDto } from './dto/update-detailCopaysAndFee.dto';
import { DetailCopaysAndFee } from './entities/detailCopaysAndFee.entity';

@Injectable()
export class DetailCopaysAndFeesService {
  constructor(
    @InjectRepository(DetailCopaysAndFee)
    private detailcopaysandfeeRepository: Repository<DetailCopaysAndFee>,
  ) {}

  async create(
    createDetailCopaysAndFeeDto: CreateDetailCopaysAndFeeDto,
  ): Promise<DetailCopaysAndFee> {
    const detailcopaysandfee: DetailCopaysAndFee =
      this.detailcopaysandfeeRepository.create(createDetailCopaysAndFeeDto);
    return await this.detailcopaysandfeeRepository.save(detailcopaysandfee);
  }

  findAll(): Promise<DetailCopaysAndFee[]> {
    return this.detailcopaysandfeeRepository.find();
  }

  findOne(id: string) {
    return this.detailcopaysandfeeRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateDetailCopaysAndFeeDto: UpdateDetailCopaysAndFeeDto,
  ): Promise<DetailCopaysAndFee> {
    const detailcopaysandfee: DetailCopaysAndFee =
      await this.detailcopaysandfeeRepository.findOneBy({ id });
    const editedDetailCopaysAndFee: DetailCopaysAndFee = Object.assign(
      detailcopaysandfee,
      updateDetailCopaysAndFeeDto,
    );
    return await this.detailcopaysandfeeRepository.save(
      editedDetailCopaysAndFee,
    );
  }

  async remove(id: string): Promise<DetailCopaysAndFee> {
    const detailcopaysandfee: DetailCopaysAndFee =
      await this.detailcopaysandfeeRepository.findOneBy({ id });
    return await this.detailcopaysandfeeRepository.softRemove(
      detailcopaysandfee,
    );
  }
}
