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

  findAll(): Promise<Neighborhood[]> {
    return this.neighborhoodRepository.find();
  }

  findOne(id: string): Promise<Neighborhood> {
    return this.neighborhoodRepository.findOneBy({ id });
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
