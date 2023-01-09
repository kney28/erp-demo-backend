import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubgroupsCupDto } from './dto/create-subgroups-cup.dto';
import { UpdateSubgroupsCupDto } from './dto/update-subgroups-cup.dto';
import { SubgroupsCup } from './entities/subgroups-cup.entity';

@Injectable()
export class SubgroupsCupsService {
  constructor(
    @InjectRepository(SubgroupsCup)
    private subgroupsCupRepository: Repository<SubgroupsCup>,
  ) {}

  create(createSubgroupsCupDto: CreateSubgroupsCupDto): Promise<SubgroupsCup> {
    const subgroupsCup: SubgroupsCup = this.subgroupsCupRepository.create(
      createSubgroupsCupDto,
    );
    return this.subgroupsCupRepository.save(subgroupsCup);
  }

  findAll(): Promise<SubgroupsCup[]> {
    return this.subgroupsCupRepository.find();
  }

  findOne(id: string): Promise<SubgroupsCup> {
    return this.subgroupsCupRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateSubgroupsCupDto: UpdateSubgroupsCupDto,
  ): Promise<SubgroupsCup> {
    const subgroupsCup: SubgroupsCup =
      await this.subgroupsCupRepository.findOneBy({
        id,
      });
    const editedGroupsCupRepository: SubgroupsCup = Object.assign(
      subgroupsCup,
      updateSubgroupsCupDto,
    );
    return this.subgroupsCupRepository.save(editedGroupsCupRepository);
  }

  async remove(id: string): Promise<SubgroupsCup> {
    const subgroupsCup: SubgroupsCup =
      await this.subgroupsCupRepository.findOneBy({
        id,
      });
    return this.subgroupsCupRepository.softRemove(subgroupsCup);
  }
}
