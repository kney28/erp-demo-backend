import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpecialPopulationDto } from './dto/create-specialpopulation.dto';
import { UpdateSpecialPopulationDto } from './dto/update-specialpopulation.dto';
import { SpecialPopulation } from './entities/specialpopulation.entity';

@Injectable()
export class SpecialPopulationService {
  constructor(
    @InjectRepository(SpecialPopulation)
    private specialpopulationRepository: Repository<SpecialPopulation>,
  ) {}

  async create(
    createSpecialPopulationDto: CreateSpecialPopulationDto,
  ): Promise<SpecialPopulation> {
    const specialpopulation: SpecialPopulation =
      this.specialpopulationRepository.create(createSpecialPopulationDto);
    return await this.specialpopulationRepository.save(specialpopulation);
  }

  findAll(): Promise<SpecialPopulation[]> {
    return this.specialpopulationRepository.find();
  }

  findOne(id: string): Promise<SpecialPopulation> {
    return this.specialpopulationRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateSpecialPopulationDto: UpdateSpecialPopulationDto,
  ): Promise<SpecialPopulation> {
    const specialpopulation: SpecialPopulation =
      await this.specialpopulationRepository.findOneBy({ id });
    const editedSpecialPopulation: SpecialPopulation = Object.assign(
      specialpopulation,
      updateSpecialPopulationDto,
    );
    return await this.specialpopulationRepository.save(editedSpecialPopulation);
  }

  async remove(id: string): Promise<SpecialPopulation> {
    const specialpopulation: SpecialPopulation =
      await this.specialpopulationRepository.findOneBy({ id });
    return await this.specialpopulationRepository.softRemove(specialpopulation);
  }
}
