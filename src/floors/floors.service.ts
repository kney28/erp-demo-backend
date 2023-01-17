import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { Floor } from './entities/floor.entity';

@Injectable()
export class FloorsService {
  constructor(
    @InjectRepository(Floor)
    private floorRepository: Repository<Floor>,
  ) {}

  async create(createFloorDto: CreateFloorDto): Promise<Floor> {
    const floor: Floor = this.floorRepository.create(createFloorDto);
    await this.floorRepository.save(floor);
    return floor;
  }

  findAll(): Promise<Floor[]> {
    return this.floorRepository.find();
  }

  findOne(id: string): Promise<Floor> {
    return this.floorRepository.findOneBy({ id });
  }

  async update(id: string, updateFloorDto: UpdateFloorDto): Promise<Floor> {
    await this.floorRepository.update(id, updateFloorDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Floor> {
    const floor: Floor = await this.findOne(id);
    await this.floorRepository.softRemove(floor);
    return floor;
  }
}
