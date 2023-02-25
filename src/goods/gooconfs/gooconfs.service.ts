import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGooconfDto } from './dto/create-gooconf.dto';
import { UpdateGooconfDto } from './dto/update-gooconf.dto';
import { Gooconf } from './entities/gooconf.entity';

@Injectable()
export class GooconfsService {
  constructor(
    @InjectRepository(Gooconf)
    private gooconfsRepository: Repository<Gooconf>,
  ) {}

  async create(createGooconfDto: CreateGooconfDto): Promise<Gooconf> {
    const gooconf: Gooconf = this.gooconfsRepository.create(createGooconfDto);
    return await this.gooconfsRepository.save(gooconf);
  }

  findAll(): Promise<Gooconf[]> {
    return this.gooconfsRepository.find();
  }

  findOne(id: string): Promise<Gooconf> {
    return this.gooconfsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateGooconfDto: UpdateGooconfDto,
  ): Promise<Gooconf> {
    const gooconf: Gooconf = await this.gooconfsRepository.findOneBy({
      id,
    });
    const editedGooconf: Gooconf = Object.assign(gooconf, updateGooconfDto);
    return await this.gooconfsRepository.save(editedGooconf);
  }

  async remove(id: string): Promise<Gooconf> {
    const gooconf: Gooconf = await this.gooconfsRepository.findOneBy({
      id,
    });
    return await this.gooconfsRepository.softRemove(gooconf);
  }
}
