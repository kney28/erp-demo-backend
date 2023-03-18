import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccinicialrunDto } from './dto/create-accinicialrun.dto';
import { UpdateAccinicialrunDto } from './dto/update-accinicialrun.dto';
import { Accinicialrun } from './entities/accinicialrun.entity';

@Injectable()
export class AccinicialrunsService {
  constructor(
    @InjectRepository(Accinicialrun)
    private accinicialrunsRepository: Repository<Accinicialrun>,
  ) {}

  async create(
    createAccinicialrunDto: CreateAccinicialrunDto,
  ): Promise<Accinicialrun> {
    const accinicialrun: Accinicialrun = this.accinicialrunsRepository.create(
      createAccinicialrunDto,
    );
    return await this.accinicialrunsRepository.save(accinicialrun);
  }

  findAll(): Promise<Accinicialrun[]> {
    return this.accinicialrunsRepository.find();
  }

  findOne(id: string): Promise<Accinicialrun> {
    return this.accinicialrunsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAccinicialrunDto: UpdateAccinicialrunDto,
  ): Promise<Accinicialrun> {
    const accinicialrun: Accinicialrun =
      await this.accinicialrunsRepository.findOneBy({
        id,
      });
    const editedAccinicialrun: Accinicialrun = Object.assign(
      accinicialrun,
      updateAccinicialrunDto,
    );
    return await this.accinicialrunsRepository.save(editedAccinicialrun);
  }

  async remove(id: string): Promise<Accinicialrun> {
    const accinicialrun: Accinicialrun =
      await this.accinicialrunsRepository.findOneBy({
        id,
      });
    return await this.accinicialrunsRepository.softRemove(accinicialrun);
  }
}
