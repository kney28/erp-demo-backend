import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSisbenLevelDto } from './dto/create-sisbenlevel.dto';
import { UpdateSisbenLevelDto } from './dto/update-sisbenlevel.dto';
import { SisbenLevel } from './entities/sisbenlevel.entity';

@Injectable()
export class SisbenLevelsService {
  constructor(
    @InjectRepository(SisbenLevel)
    private sisbenlevelRepository: Repository<SisbenLevel>,
  ) {}

  async create(
    createSisbenLevelDto: CreateSisbenLevelDto,
  ): Promise<SisbenLevel> {
    const sisbenlevel: SisbenLevel =
      this.sisbenlevelRepository.create(createSisbenLevelDto);
    return await this.sisbenlevelRepository.save(sisbenlevel);
  }

  findAll(): Promise<SisbenLevel[]> {
    return this.sisbenlevelRepository.find();
  }

  findOne(id: string): Promise<SisbenLevel> {
    return this.sisbenlevelRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateSisbenLevelDto: UpdateSisbenLevelDto,
  ): Promise<SisbenLevel> {
    const sisbenlevel: SisbenLevel = await this.sisbenlevelRepository.findOneBy(
      { id },
    );
    const editedSisbenLevel: SisbenLevel = Object.assign(
      sisbenlevel,
      updateSisbenLevelDto,
    );
    return await this.sisbenlevelRepository.save(editedSisbenLevel);
  }

  async remove(id: string): Promise<SisbenLevel> {
    const sisbenlevel: SisbenLevel = await this.sisbenlevelRepository.findOneBy(
      { id },
    );
    return await this.sisbenlevelRepository.softRemove(sisbenlevel);
  }
}
