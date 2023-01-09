import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHeadquartersDto } from './dto/create-headquarters.dto';
import { UpdateHeadquartersDto } from './dto/update-headquarters.dto';
import { Headquarters } from './entities/headquarters.entity';

@Injectable()
export class HeadquartersService {
  constructor(
    @InjectRepository(Headquarters)
    private headquartersRepository: Repository<Headquarters>,
  ) {}

  async create(
    createHeadquartersDto: CreateHeadquartersDto,
  ): Promise<Headquarters> {
    const headquarters: Headquarters = this.headquartersRepository.create(
      createHeadquartersDto,
    );
    return await this.headquartersRepository.save(headquarters);
  }

  findAll(): Promise<Headquarters[]> {
    return this.headquartersRepository.find();
  }

  findOne(id: string): Promise<Headquarters> {
    return this.headquartersRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateHeadquartersDto: UpdateHeadquartersDto,
  ): Promise<Headquarters> {
    const headquarters: Headquarters =
      await this.headquartersRepository.findOneBy({ id });
    const editedHeadquarters: Headquarters = Object.assign(
      headquarters,
      updateHeadquartersDto,
    );
    return await this.headquartersRepository.save(editedHeadquarters);
  }

  async remove(id: string): Promise<Headquarters> {
    const headquarters: Headquarters =
      await this.headquartersRepository.findOneBy({ id });
    return await this.headquartersRepository.softRemove(headquarters);
  }
}
