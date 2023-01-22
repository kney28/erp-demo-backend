import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupsCupDto } from './dto/create-groups-cup.dto';
import { UpdateGroupsCupDto } from './dto/update-groups-cup.dto';
import { GroupsCup } from './entities/groups-cup.entity';

@Injectable()
export class GroupsCupsService {
  constructor(
    @InjectRepository(GroupsCup)
    private groupsCupRepository: Repository<GroupsCup>,
  ) {}

  create(createGroupsCupDto: CreateGroupsCupDto): Promise<GroupsCup> {
    const groupsCup: GroupsCup =
      this.groupsCupRepository.create(createGroupsCupDto);
    return this.groupsCupRepository.save(groupsCup);
  }

  findAll(): Promise<GroupsCup[]> {
    return this.groupsCupRepository.find();
  }

  findOne(id: string): Promise<GroupsCup> {
    return this.groupsCupRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateGroupsCupDto: UpdateGroupsCupDto,
  ): Promise<GroupsCup> {
    const groupsCup: GroupsCup = await this.groupsCupRepository.findOneBy({
      id,
    });

    const editedGroupsCupRepository: GroupsCup = Object.assign(
      groupsCup,
      updateGroupsCupDto,
    );

    return this.groupsCupRepository.save(editedGroupsCupRepository);
  }

  async remove(id: string): Promise<GroupsCup> {
    const groupsCup: GroupsCup = await this.groupsCupRepository.findOneBy({
      id,
    });
    return this.groupsCupRepository.softRemove(groupsCup);
  }
}
