import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateValidityDto } from './dto/create-validity.dto';
import { UpdateValidityDto } from './dto/update-validity.dto';
import { Validity } from './entities/validity.entity';

@Injectable()
export class ValidityService {
  constructor(
    @InjectRepository(Validity)
    private validityRepository: Repository<Validity>,
  ) {}

  async create(createValidityDto: CreateValidityDto): Promise<Validity> {
    const validity: Validity =
      this.validityRepository.create(createValidityDto);
    return await this.validityRepository.save(validity);
  }

  findAll(): Promise<Validity[]> {
    return this.validityRepository.find();
  }

  findOne(id: string): Promise<Validity> {
    return this.validityRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateValidityDto: UpdateValidityDto,
  ): Promise<Validity> {
    const validity: Validity = await this.validityRepository.findOneBy({ id });
    const editedValidity: Validity = Object.assign(validity, updateValidityDto);
    return await this.validityRepository.save(editedValidity);
  }

  async remove(id: string): Promise<Validity> {
    const validity: Validity = await this.validityRepository.findOneBy({ id });
    return await this.validityRepository.softRemove(validity);
  }
}
