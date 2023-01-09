import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypesSeatDto } from './dto/create-types-seat.dto';
import { UpdateTypesSeatDto } from './dto/update-types-seat.dto';
import { TypesSeat } from './entities/types-seat.entity';

@Injectable()
export class TypesSeatsService {
  constructor(
    @InjectRepository(TypesSeat)
    private typesSeatRepository: Repository<TypesSeat>,
  ) {}

  async create(createTypesSeatDto: CreateTypesSeatDto): Promise<TypesSeat> {
    const typesSeat: TypesSeat =
      this.typesSeatRepository.create(createTypesSeatDto);
    await this.typesSeatRepository.save(typesSeat);
    return typesSeat;
  }

  findAll(): Promise<TypesSeat[]> {
    return this.typesSeatRepository.find();
  }

  findOne(id: string): Promise<TypesSeat> {
    return this.typesSeatRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateTypesSeatDto: UpdateTypesSeatDto,
  ): Promise<TypesSeat> {
    await this.typesSeatRepository.update(id, updateTypesSeatDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<TypesSeat> {
    const typesSeat: TypesSeat = await this.findOne(id);
    await this.typesSeatRepository.softRemove(typesSeat);
    return typesSeat;
  }
}
