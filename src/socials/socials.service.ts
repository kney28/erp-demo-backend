import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Social } from './entities/social.entity';

@Injectable()
export class SocialsService {
  constructor(
    @InjectRepository(Social)
    private socialsRepository: Repository<Social>,
  ) {}

  async create(createSocialDto: CreateSocialDto) {
    const social: Social = this.socialsRepository.create(createSocialDto);
    return await this.socialsRepository.save(social);
  }

  findAll(): Promise<Social[]> {
    return this.socialsRepository.find();
  }

  findOne(id: string): Promise<Social> {
    return this.socialsRepository.findOneBy({ id });
  }

  async update(id: string, updateSocialDto: UpdateSocialDto): Promise<Social> {
    const social: Social = await this.socialsRepository.findOneBy({ id });
    const editedSocial: Social = Object.assign(social, updateSocialDto);
    return await this.socialsRepository.save(editedSocial);
  }

  async remove(id: string): Promise<Social> {
    const social: Social = await this.socialsRepository.findOneBy({ id });
    return await this.socialsRepository.softRemove(social);
  }
}
