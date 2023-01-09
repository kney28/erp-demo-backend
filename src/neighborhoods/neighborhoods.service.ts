import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNeighborhoodDto } from './dto/create-neighborhood.dto';
import { UpdateNeighborhoodDto } from './dto/update-neighborhood.dto';
import { Neighborhood } from './entities/neighborhood.entity';

@Injectable()
export class NeighborhoodsService {
  constructor(
    @InjectRepository(Neighborhood)
    private neighborhoodRepository: Repository<Neighborhood>,
  ) {}

  async create(
    createNeighborhoodDto: CreateNeighborhoodDto,
  ): Promise<Neighborhood> {
    const neighborhood: Neighborhood = this.neighborhoodRepository.create(
      createNeighborhoodDto,
    );
    await this.neighborhoodRepository.save(neighborhood);
    return neighborhood;
  }

  async findAll(): Promise<Neighborhood[]> {
    const neighborhoods = await this.neighborhoodRepository
      .createQueryBuilder('neighborhood')
      .leftJoinAndSelect('neighborhood.municipality', 'municipality')
      .getMany();

    return neighborhoods;
  }

  async findOne(id: string): Promise<Neighborhood> {
    const neighborhoods = await this.neighborhoodRepository
      .createQueryBuilder('neighborhood')
      .leftJoinAndSelect('neighborhood.municipality', 'municipality')
      .where('neighborhood.id = :id', { id: id })
      .getOne();

    return neighborhoods;
  }

  async update(
    id: string,
    updateNeighborhoodDto: UpdateNeighborhoodDto,
  ): Promise<Neighborhood> {
    await this.neighborhoodRepository.update(id, updateNeighborhoodDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Neighborhood> {
    const neighborhood: Neighborhood = await this.findOne(id);
    await this.neighborhoodRepository.softRemove(neighborhood);
    return neighborhood;
  }
}
