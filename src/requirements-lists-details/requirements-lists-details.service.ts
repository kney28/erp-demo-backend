import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequirementsListsDetailDto } from './dto/create-requirements-lists-detail.dto';
import { UpdateRequirementsListsDetailDto } from './dto/update-requirements-lists-detail.dto';
import { RequirementsListDetail } from './entities/requirements-lists-detail.entity';

@Injectable()
export class RequirementsListsDetailsService {
  constructor(
    @InjectRepository(RequirementsListDetail)
    private requirementsListDetail: Repository<RequirementsListDetail>,
  ) {}

  create(createRequirementsListsDetailDto: CreateRequirementsListsDetailDto) {
    const retention: RequirementsListDetail =
      this.requirementsListDetail.create(createRequirementsListsDetailDto);
    return this.requirementsListDetail.save(retention);
  }

  async findAll(): Promise<RequirementsListDetail[]> {
    const requirements = await this.requirementsListDetail
      .createQueryBuilder('requirementsListDetail')
      .leftJoinAndSelect(
        'requirementsListDetail.requirements_list',
        'requirements_list',
      )
      .getMany();
    return requirements;
  }

  async findOne(id: string): Promise<RequirementsListDetail> {
    const requirements = await this.requirementsListDetail
      .createQueryBuilder('requirementsListDetail')
      .leftJoinAndSelect(
        'requirementsListDetail.requirements_list',
        'requirements_list',
      )
      .where('requirementsListDetail.id = :id', { id: id })
      .getOne();
    return requirements;
  }

  async update(
    id: string,
    updateRequirementsListsDetailDto: UpdateRequirementsListsDetailDto,
  ) {
    const retention: RequirementsListDetail =
      await this.requirementsListDetail.findOneBy({
        id,
      });

    const editedRetention: RequirementsListDetail = Object.assign(
      retention,
      updateRequirementsListsDetailDto,
    );

    return this.requirementsListDetail.save(editedRetention);
  }

  async remove(id: string) {
    const retention: RequirementsListDetail =
      await this.requirementsListDetail.findOneBy({
        id,
      });
    return this.requirementsListDetail.softRemove(retention);
  }
}
