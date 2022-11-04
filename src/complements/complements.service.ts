import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComplementDto } from './dto/create-complement.dto';
import { UpdateComplementDto } from './dto/update-complement.dto';
import { Complement } from './entities/complement.entity';

@Injectable()
export class ComplementsService {
  constructor(
    @InjectRepository(Complement)
    private complementsRepository: Repository<Complement>,
  ) {}

  async create(createComplementDto: CreateComplementDto): Promise<Complement> {
    const complement = this.complementsRepository.create(createComplementDto);
    return await this.complementsRepository.save(complement);
  }

  findAll(): Promise<Complement[]> {
    return this.complementsRepository.find();
  }

  findOne(id: string) {
    return this.complementsRepository.findOneBy({ id });
  }

  async update(id: string, updateComplementDto: UpdateComplementDto) {
    const complement = await this.complementsRepository.findOneBy({ id });
    const editedComplement = Object.assign(complement, updateComplementDto);
    return await this.complementsRepository.save(editedComplement);
  }

  async remove(id: string) {
    const user = await this.complementsRepository.findOneBy({ id });
    return await this.complementsRepository.softRemove(user);
  }
}
