import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCopaysAndFeesDto } from './dto/create-copaysAndFees.dto';
import { UpdateCopaysAndFeeDto } from './dto/update-copaysandfees.dto';
import { CopaysAndFee } from './entities/copaysAndFee.entity';

@Injectable()
export class CopaysAndFeesService {
  constructor(
    @InjectRepository(CopaysAndFee)
    private copaysandfeesRepository: Repository<CopaysAndFee>,
  ) {}

  async create(
    createCopaysAndFeeDto: CreateCopaysAndFeesDto,
  ): Promise<CopaysAndFee> {
    const copaysandfees: CopaysAndFee = this.copaysandfeesRepository.create(
      createCopaysAndFeeDto,
    );
    return await this.copaysandfeesRepository.save(copaysandfees);
  }

  findAll(): Promise<CopaysAndFee[]> {
    return this.copaysandfeesRepository.find();
  }

  findOne(id: string) {
    return this.copaysandfeesRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCopaysAndFeeDto: UpdateCopaysAndFeeDto,
  ): Promise<CopaysAndFee> {
    const copaysandfees: CopaysAndFee =
      await this.copaysandfeesRepository.findOneBy({ id });
    const editedCopaysAndFees: CopaysAndFee = Object.assign(
      copaysandfees,
      updateCopaysAndFeeDto,
    );
    return await this.copaysandfeesRepository.save(editedCopaysAndFees);
  }

  async remove(id: string): Promise<CopaysAndFee> {
    const copaysandfees: CopaysAndFee =
      await this.copaysandfeesRepository.findOneBy({ id });
    return await this.copaysandfeesRepository.softRemove(copaysandfees);
  }
}
