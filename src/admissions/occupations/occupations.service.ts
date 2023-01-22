import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOccupationDto } from './dto/create-occupation.dto';
import { UpdateOccupationDto } from './dto/update-occupation.dto';
import { Occupation } from './entities/occupation.entity';

@Injectable()
export class OccupationsService {
  constructor(
    @InjectRepository(Occupation)
    private occupationsRepository: Repository<Occupation>,
  ) {}

  async create(createOccupationDto: CreateOccupationDto): Promise<Occupation> {
    const occupation: Occupation =
      this.occupationsRepository.create(createOccupationDto);
    return await this.occupationsRepository.save(occupation);
  }

  findAll(): Promise<Occupation[]> {
    return this.occupationsRepository.find();
  }

  findOne(id: string): Promise<Occupation> {
    return this.occupationsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateOccupationDto: UpdateOccupationDto,
  ): Promise<Occupation> {
    const occupation: Occupation = await this.occupationsRepository.findOneBy({
      id,
    });
    const editedOccupation: Occupation = Object.assign(
      occupation,
      updateOccupationDto,
    );
    return await this.occupationsRepository.save(editedOccupation);
  }

  async remove(id: string): Promise<Occupation> {
    const occupation: Occupation = await this.occupationsRepository.findOneBy({
      id,
    });
    return await this.occupationsRepository.softRemove(occupation);
  }
}
