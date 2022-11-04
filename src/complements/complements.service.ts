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
    const complement: Complement =
      this.complementsRepository.create(createComplementDto);
    return await this.complementsRepository.save(complement);
  }

  findAll(): Promise<Complement[]> {
    return this.complementsRepository.find();
  }

  findOne(id: string): Promise<Complement> {
    return this.complementsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateComplementDto: UpdateComplementDto,
  ): Promise<Complement> {
    const complement: Complement = await this.complementsRepository.findOneBy({
      id,
    });
    const editedComplement: Complement = Object.assign(
      complement,
      updateComplementDto,
    );
    return await this.complementsRepository.save(editedComplement);
  }

  async remove(id: string): Promise<Complement> {
    const user = await this.complementsRepository.findOneBy({ id });
    return await this.complementsRepository.softRemove(user);
  }
}
