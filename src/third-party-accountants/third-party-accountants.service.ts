import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThirdPartyAccountantDto } from './dto/create-third-party-accountant.dto';
import { UpdateThirdPartyAccountantDto } from './dto/update-third-party-accountant.dto';
import { ThirdPartyAccountant } from './entities/third-party-accountant.entity';

@Injectable()
export class ThirdPartyAccountantsService {
  constructor(
    @InjectRepository(ThirdPartyAccountant)
    private thirdPartyAccountantRepository: Repository<ThirdPartyAccountant>,
  ) {}

  create(
    createThirdPartyAccountantDto: CreateThirdPartyAccountantDto,
  ): Promise<ThirdPartyAccountant> {
    const account: ThirdPartyAccountant =
      this.thirdPartyAccountantRepository.create(createThirdPartyAccountantDto);
    return this.thirdPartyAccountantRepository.save(account);
  }

  findAll(): Promise<ThirdPartyAccountant[]> {
    return this.thirdPartyAccountantRepository.find();
  }

  findOne(id: string): Promise<ThirdPartyAccountant> {
    return this.thirdPartyAccountantRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateThirdPartyAccountantDto: UpdateThirdPartyAccountantDto,
  ): Promise<ThirdPartyAccountant> {
    const account: ThirdPartyAccountant =
      await this.thirdPartyAccountantRepository.findOneBy({
        id,
      });

    const thirdPartyAccountant: ThirdPartyAccountant = Object.assign(
      account,
      updateThirdPartyAccountantDto,
    );

    return this.thirdPartyAccountantRepository.save(thirdPartyAccountant);
  }

  async remove(id: string): Promise<ThirdPartyAccountant> {
    const account: ThirdPartyAccountant =
      await this.thirdPartyAccountantRepository.findOneBy({
        id,
      });
    return this.thirdPartyAccountantRepository.softRemove(account);
  }
}
