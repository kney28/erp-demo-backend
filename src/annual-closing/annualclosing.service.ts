import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnnualClosingDto } from './dto/create-annualclosing.dto';
import { UpdateAnnualClosingDto } from './dto/update-annualclosing.dto';
import { AnnualClosing } from './entities/annualclosing.entity';

@Injectable()
export class AnnualClosingService {
  constructor(
    @InjectRepository(AnnualClosing)
    private annualclosingRepository: Repository<AnnualClosing>,
  ) {}

  async create(
    createAnnualClosingDto: CreateAnnualClosingDto,
  ): Promise<AnnualClosing> {
    const annualclosing: AnnualClosing = this.annualclosingRepository.create(
      createAnnualClosingDto,
    );
    return await this.annualclosingRepository.save(annualclosing);
  }

  findAll(): Promise<AnnualClosing[]> {
    return this.annualclosingRepository.find();
  }

  findOne(id: string): Promise<AnnualClosing> {
    return this.annualclosingRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAnnualClosingDto: UpdateAnnualClosingDto,
  ): Promise<AnnualClosing> {
    const annualclosing: AnnualClosing =
      await this.annualclosingRepository.findOneBy({ id });
    const editedAnnualClosing: AnnualClosing = Object.assign(
      annualclosing,
      updateAnnualClosingDto,
    );
    return await this.annualclosingRepository.save(editedAnnualClosing);
  }

  async remove(id: string): Promise<AnnualClosing> {
    const annualclosing: AnnualClosing =
      await this.annualclosingRepository.findOneBy({ id });
    return await this.annualclosingRepository.softRemove(annualclosing);
  }
}
