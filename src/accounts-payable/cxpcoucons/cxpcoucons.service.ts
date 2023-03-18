import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCxpcouconDto } from './dto/create-cxpcoucon.dto';
import { UpdateCxpcouconDto } from './dto/update-cxpcoucon.dto';
import { Cxpcoucon } from './entities/cxpcoucon.entity';

@Injectable()
export class CxpcouconsService {
  constructor(
    @InjectRepository(Cxpcoucon)
    private cxpcouconsRepository: Repository<Cxpcoucon>,
  ) {}

  async create(createCxpcouconDto: CreateCxpcouconDto): Promise<Cxpcoucon> {
    const cxpcoucon: Cxpcoucon =
      this.cxpcouconsRepository.create(createCxpcouconDto);
    return await this.cxpcouconsRepository.save(cxpcoucon);
  }

  findAll(): Promise<Cxpcoucon[]> {
    return this.cxpcouconsRepository.find();
  }

  findOne(id: string): Promise<Cxpcoucon> {
    return this.cxpcouconsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCxpcouconDto: UpdateCxpcouconDto,
  ): Promise<Cxpcoucon> {
    const cxpcoucon: Cxpcoucon = await this.cxpcouconsRepository.findOneBy({
      id,
    });
    const editedCxpcoucon: Cxpcoucon = Object.assign(
      cxpcoucon,
      updateCxpcouconDto,
    );
    return await this.cxpcouconsRepository.save(editedCxpcoucon);
  }

  async remove(id: string): Promise<Cxpcoucon> {
    const cxpcoucon: Cxpcoucon = await this.cxpcouconsRepository.findOneBy({
      id,
    });
    return await this.cxpcouconsRepository.softRemove(cxpcoucon);
  }
}
