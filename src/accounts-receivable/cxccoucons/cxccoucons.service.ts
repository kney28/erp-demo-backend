import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCxccouconDto } from './dto/create-cxccoucon.dto';
import { UpdateCxccouconDto } from './dto/update-cxccoucon.dto';
import { Cxccoucon } from './entities/cxccoucon.entity';

@Injectable()
export class CxccouconsService {
  constructor(
    @InjectRepository(Cxccoucon)
    private cxccouconsRepository: Repository<Cxccoucon>,
  ) {}

  async create(createCxccouconDto: CreateCxccouconDto): Promise<Cxccoucon> {
    const cxccoucon: Cxccoucon =
      this.cxccouconsRepository.create(createCxccouconDto);
    return await this.cxccouconsRepository.save(cxccoucon);
  }

  findAll(): Promise<Cxccoucon[]> {
    return this.cxccouconsRepository.find();
  }

  findOne(id: string): Promise<Cxccoucon> {
    return this.cxccouconsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCxccouconDto: UpdateCxccouconDto,
  ): Promise<Cxccoucon> {
    const cxccoucon: Cxccoucon = await this.cxccouconsRepository.findOneBy({
      id,
    });
    const editedCxccoucon: Cxccoucon = Object.assign(
      cxccoucon,
      updateCxccouconDto,
    );
    return await this.cxccouconsRepository.save(editedCxccoucon);
  }

  async remove(id: string): Promise<Cxccoucon> {
    const cxccoucon: Cxccoucon = await this.cxccouconsRepository.findOneBy({
      id,
    });
    return await this.cxccouconsRepository.softRemove(cxccoucon);
  }
}
