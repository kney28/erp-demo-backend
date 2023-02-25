import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGooclaDto } from './dto/create-goocla.dto';
import { UpdateGooclaDto } from './dto/update-goocla.dto';
import { Goocla } from './entities/goocla.entity';

@Injectable()
export class GooclasService {
  constructor(
    @InjectRepository(Goocla)
    private gooclasRepository: Repository<Goocla>,
  ) {}

  async create(createGooclaDto: CreateGooclaDto): Promise<Goocla> {
    const goocla: Goocla = this.gooclasRepository.create(createGooclaDto);
    return await this.gooclasRepository.save(goocla);
  }

  findAll(): Promise<Goocla[]> {
    return this.gooclasRepository.find();
  }

  findOne(id: string): Promise<Goocla> {
    return this.gooclasRepository.findOneBy({ id });
  }

  async update(id: string, updateGooclaDto: UpdateGooclaDto): Promise<Goocla> {
    const goocla: Goocla = await this.gooclasRepository.findOneBy({
      id,
    });
    const editedGoocla: Goocla = Object.assign(goocla, updateGooclaDto);
    return await this.gooclasRepository.save(editedGoocla);
  }

  async remove(id: string): Promise<Goocla> {
    const goocla: Goocla = await this.gooclasRepository.findOneBy({
      id,
    });
    return await this.gooclasRepository.softRemove(goocla);
  }
}
