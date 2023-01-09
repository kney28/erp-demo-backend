import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequirementsListDto } from './dto/create-requirements-list.dto';
import { UpdateRequirementsListDto } from './dto/update-requirements-list.dto';
import { RequirementsList } from './entities/requirements-list.entity';

@Injectable()
export class RequirementsListsService {
  constructor(
    @InjectRepository(RequirementsList)
    private requirementsListRepository: Repository<RequirementsList>,
  ) {}

  create(
    createRequirementsListDto: CreateRequirementsListDto,
  ): Promise<RequirementsList> {
    const requirementsList: RequirementsList =
      this.requirementsListRepository.create(createRequirementsListDto);
    return this.requirementsListRepository.save(requirementsList);
  }

  findAll(): Promise<RequirementsList[]> {
    return this.requirementsListRepository.find();
  }

  findOne(id: string): Promise<RequirementsList> {
    return this.requirementsListRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateRequirementsListDto: UpdateRequirementsListDto,
  ): Promise<RequirementsList> {
    const groupsCup: RequirementsList =
      await this.requirementsListRepository.findOneBy({
        id,
      });

    const editedRequirementsListRepository: RequirementsList = Object.assign(
      groupsCup,
      updateRequirementsListDto,
    );

    return this.requirementsListRepository.save(
      editedRequirementsListRepository,
    );
  }

  async remove(id: string): Promise<RequirementsList> {
    const groupsCup: RequirementsList =
      await this.requirementsListRepository.findOneBy({
        id,
      });
    return this.requirementsListRepository.softRemove(groupsCup);
  }
}
