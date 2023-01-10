import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonthlyClosureDto } from './dto/create-monthlyclosure.dto';
import { UpdateMonthlyClosureDto } from './dto/update-monthlyclosure.dto';
import { MonthlyClosure } from './entities/monthlyclosure.entity';

@Injectable()
export class MonthlyClosureService {
  constructor(
    @InjectRepository(MonthlyClosure)
    private monthlyclosureRepository: Repository<MonthlyClosure>,
  ) {}

  async create(
    createMonthlyClosureDto: CreateMonthlyClosureDto,
  ): Promise<MonthlyClosure> {
    const monthlyclosure: MonthlyClosure = this.monthlyclosureRepository.create(
      createMonthlyClosureDto,
    );
    return await this.monthlyclosureRepository.save(monthlyclosure);
  }

  findAll(): Promise<MonthlyClosure[]> {
    return this.monthlyclosureRepository.find();
  }

  findOne(id: string): Promise<MonthlyClosure> {
    return this.monthlyclosureRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateMonthlyClosureDto: UpdateMonthlyClosureDto,
  ): Promise<MonthlyClosure> {
    const monthlyclosure: MonthlyClosure =
      await this.monthlyclosureRepository.findOneBy({ id });
    const editedMonthlyClosure: MonthlyClosure = Object.assign(
      monthlyclosure,
      updateMonthlyClosureDto,
    );
    return await this.monthlyclosureRepository.save(editedMonthlyClosure);
  }

  async remove(id: string): Promise<MonthlyClosure> {
    const monthlyclosure: MonthlyClosure =
      await this.monthlyclosureRepository.findOneBy({ id });
    return await this.monthlyclosureRepository.softRemove(monthlyclosure);
  }
}
