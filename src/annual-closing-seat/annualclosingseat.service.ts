import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnnualClosingSeatDto } from './dto/create-annualclosingseat.dto';
import { UpdateAnnualClosingSeatDto } from './dto/update-annualclosingseat.dto';
import { AnnualClosingSeat } from './entities/annualclosingseat.entity';

@Injectable()
export class AnnualClosingSeatService {
  constructor(
    @InjectRepository(AnnualClosingSeat)
    private annualclosingseatRepository: Repository<AnnualClosingSeat>,
  ) {}

  async create(
    createAnnualClosingSeatDto: CreateAnnualClosingSeatDto,
  ): Promise<AnnualClosingSeat> {
    const annualclosingseat: AnnualClosingSeat =
      this.annualclosingseatRepository.create(createAnnualClosingSeatDto);
    return await this.annualclosingseatRepository.save(annualclosingseat);
  }

  findAll(): Promise<AnnualClosingSeat[]> {
    return this.annualclosingseatRepository.find();
  }

  findOne(id: string): Promise<AnnualClosingSeat> {
    return this.annualclosingseatRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAnnualClosingSeatDto: UpdateAnnualClosingSeatDto,
  ): Promise<AnnualClosingSeat> {
    const annualclosingseat: AnnualClosingSeat =
      await this.annualclosingseatRepository.findOneBy({ id });
    const editedAnnualClosingSeat: AnnualClosingSeat = Object.assign(
      annualclosingseat,
      updateAnnualClosingSeatDto,
    );
    return await this.annualclosingseatRepository.save(editedAnnualClosingSeat);
  }

  async remove(id: string): Promise<AnnualClosingSeat> {
    const annualclosingseat: AnnualClosingSeat =
      await this.annualclosingseatRepository.findOneBy({ id });
    return await this.annualclosingseatRepository.softRemove(annualclosingseat);
  }
}
