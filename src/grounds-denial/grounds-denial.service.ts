import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroundsDenialDto } from './dto/create-grounds-denial.dto';
import { UpdateGroundsDenialDto } from './dto/update-grounds-denial.dto';
import { GroundsDenial } from './entities/grounds-denial.entity';

@Injectable()
export class GroundsDenialService {
  constructor(
    @InjectRepository(GroundsDenial)
    private groundsDenialRepository: Repository<GroundsDenial>,
  ) {}

  create(
    createGroundsDenialDto: CreateGroundsDenialDto,
  ): Promise<GroundsDenial> {
    const groundsDenial: GroundsDenial = this.groundsDenialRepository.create(
      createGroundsDenialDto,
    );
    return this.groundsDenialRepository.save(groundsDenial);
  }

  findAll(): Promise<GroundsDenial[]> {
    return this.groundsDenialRepository.find();
  }

  findOne(id: string): Promise<GroundsDenial> {
    return this.groundsDenialRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateGroundsDenialDto: UpdateGroundsDenialDto,
  ): Promise<GroundsDenial> {
    const groupsCup: GroundsDenial =
      await this.groundsDenialRepository.findOneBy({
        id,
      });

    const editedGroundsDenialRepository: GroundsDenial = Object.assign(
      groupsCup,
      updateGroundsDenialDto,
    );

    return this.groundsDenialRepository.save(editedGroundsDenialRepository);
  }

  async remove(id: string): Promise<GroundsDenial> {
    const groupsCup: GroundsDenial =
      await this.groundsDenialRepository.findOneBy({
        id,
      });
    return this.groundsDenialRepository.softRemove(groupsCup);
  }
}
