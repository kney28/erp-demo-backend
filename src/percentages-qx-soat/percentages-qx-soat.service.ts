import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePercentagesQxSoatDto } from './dto/create-percentages-qx-soat.dto';
import { UpdatePercentagesQxSoatDto } from './dto/update-percentages-qx-soat.dto';
import { PercentagesQxSoat } from './entities/percentages-qx-soat.entity';

@Injectable()
export class PercentagesQxSoatService {
  constructor(
    @InjectRepository(PercentagesQxSoat)
    private percentageRepository: Repository<PercentagesQxSoat>,
  ) {}

  async create(
    createPercentagesQxSoatDto: CreatePercentagesQxSoatDto,
  ): Promise<PercentagesQxSoat> {
    const percentage: PercentagesQxSoat = this.percentageRepository.create(
      createPercentagesQxSoatDto,
    );
    await this.percentageRepository.save(percentage);
    return percentage;
  }

  async findAll(): Promise<PercentagesQxSoat[]> {
    const requirements = await this.percentageRepository
      .createQueryBuilder('percentage')
      .leftJoinAndSelect('percentage.details', 'details')
      .getMany();
    return requirements;
  }

  async findOne(id: string): Promise<PercentagesQxSoat> {
    const requirements = await this.percentageRepository
      .createQueryBuilder('percentage')
      .leftJoinAndSelect('percentage.details', 'details')
      .where('percentage.id = :id', { id: id })
      .getOne();
    return requirements;
  }

  async update(
    id: string,
    updatePercentagesQxSoatDto: UpdatePercentagesQxSoatDto,
  ): Promise<PercentagesQxSoat> {
    await this.percentageRepository.update(id, updatePercentagesQxSoatDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<PercentagesQxSoat> {
    const country: PercentagesQxSoat = await this.findOne(id);
    await this.percentageRepository.softRemove(country);
    return country;
  }
}
