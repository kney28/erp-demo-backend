import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvpharforDto } from './dto/create-invpharfor.dto';
import { UpdateInvpharforDto } from './dto/update-invpharfor.dto';
import { Invpharfor } from './entities/invpharfor.entity';

@Injectable()
export class InvpharforsService {
  constructor(
    @InjectRepository(Invpharfor)
    private invpharforsRepository: Repository<Invpharfor>,
  ) {}

  async create(createInvpharforDto: CreateInvpharforDto): Promise<Invpharfor> {
    const invpharfor: Invpharfor =
      this.invpharforsRepository.create(createInvpharforDto);
    return await this.invpharforsRepository.save(invpharfor);
  }

  findAll(): Promise<Invpharfor[]> {
    return this.invpharforsRepository.find();
  }

  findOne(id: string): Promise<Invpharfor> {
    return this.invpharforsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateInvpharforDto: UpdateInvpharforDto,
  ): Promise<Invpharfor> {
    const invpharfor: Invpharfor = await this.invpharforsRepository.findOneBy({
      id,
    });
    const editedInvpharfor: Invpharfor = Object.assign(
      invpharfor,
      updateInvpharforDto,
    );
    return await this.invpharforsRepository.save(editedInvpharfor);
  }

  async remove(id: string): Promise<Invpharfor> {
    const invpharfor: Invpharfor = await this.invpharforsRepository.findOneBy({
      id,
    });
    return await this.invpharforsRepository.softRemove(invpharfor);
  }
}
