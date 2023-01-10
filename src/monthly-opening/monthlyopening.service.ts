import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonthlyOpeningDto } from './dto/create-monthlyopening.dto';
import { UpdateMonthlyOpeningDto } from './dto/update-monthlyopening.dto';
import { MonthlyOpening } from './entities/monthlyopening.entity';

@Injectable()
export class MonthlyOpeningService {
  constructor(
    @InjectRepository(MonthlyOpening)
    private monthlyopeningRepository: Repository<MonthlyOpening>,
  ) {}

  async create(
    createMonthlyOpeningDto: CreateMonthlyOpeningDto,
  ): Promise<MonthlyOpening> {
    const monthlyopening: MonthlyOpening = this.monthlyopeningRepository.create(
      createMonthlyOpeningDto,
    );
    return await this.monthlyopeningRepository.save(monthlyopening);
  }

  findAll(): Promise<MonthlyOpening[]> {
    return this.monthlyopeningRepository.find();
  }

  findOne(id: string): Promise<MonthlyOpening> {
    return this.monthlyopeningRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateMonthlyOpeningDto: UpdateMonthlyOpeningDto,
  ): Promise<MonthlyOpening> {
    const monthlyOpening: MonthlyOpening =
      await this.monthlyopeningRepository.findOneBy({ id });
    const editedMonthlyOpening: MonthlyOpening = Object.assign(
      monthlyOpening,
      updateMonthlyOpeningDto,
    );
    return await this.monthlyopeningRepository.save(editedMonthlyOpening);
  }

  async remove(id: string): Promise<MonthlyOpening> {
    const monthlyOpening: MonthlyOpening =
      await this.monthlyopeningRepository.findOneBy({ id });
    return await this.monthlyopeningRepository.softRemove(monthlyOpening);
  }
}
