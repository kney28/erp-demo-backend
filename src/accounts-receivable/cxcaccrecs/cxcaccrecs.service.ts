import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCxcaccrecDto } from './dto/create-cxcaccrec.dto';
import { UpdateCxcaccrecDto } from './dto/update-cxcaccrec.dto';
import { Cxcaccrec } from './entities/cxcaccrec.entity';

@Injectable()
export class CxcaccrecsService {
  constructor(
    @InjectRepository(Cxcaccrec)
    private cxcaccrecsRepository: Repository<Cxcaccrec>,
  ) {}

  async create(createCxcaccrecDto: CreateCxcaccrecDto): Promise<Cxcaccrec> {
    const cxcaccrec: Cxcaccrec =
      this.cxcaccrecsRepository.create(createCxcaccrecDto);
    return await this.cxcaccrecsRepository.save(cxcaccrec);
  }

  findAll(): Promise<Cxcaccrec[]> {
    return this.cxcaccrecsRepository.find();
  }

  findOne(id: string): Promise<Cxcaccrec> {
    return this.cxcaccrecsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCxcaccrecDto: UpdateCxcaccrecDto,
  ): Promise<Cxcaccrec> {
    const cxcaccrec: Cxcaccrec = await this.cxcaccrecsRepository.findOneBy({
      id,
    });
    const editedCxcaccrec: Cxcaccrec = Object.assign(
      cxcaccrec,
      updateCxcaccrecDto,
    );
    return await this.cxcaccrecsRepository.save(editedCxcaccrec);
  }

  async remove(id: string): Promise<Cxcaccrec> {
    const cxcaccrec: Cxcaccrec = await this.cxcaccrecsRepository.findOneBy({
      id,
    });
    return await this.cxcaccrecsRepository.softRemove(cxcaccrec);
  }
}
