import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCostCenterDto } from './dto/create-costcenter.dto';
import { UpdateCostCenterDto } from './dto/update-costcenter.dto';
import { CostCenter } from './entities/costcenter.entity';

@Injectable()
export class CostCenterService {
  constructor(
    @InjectRepository(CostCenter)
    private costcenterRepository: Repository<CostCenter>,
  ) {}

  async create(createCostCenterDto: CreateCostCenterDto): Promise<CostCenter> {
    const costcenter: CostCenter =
      this.costcenterRepository.create(createCostCenterDto);
    return await this.costcenterRepository.save(costcenter);
  }

  findAll(): Promise<CostCenter[]> {
    return this.costcenterRepository.find();
  }

  findOne(id: string): Promise<CostCenter> {
    return this.costcenterRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCostCenterDto: UpdateCostCenterDto,
  ): Promise<CostCenter> {
    const costcenter: CostCenter = await this.costcenterRepository.findOneBy({
      id,
    });
    const editedCostCenter: CostCenter = Object.assign(
      costcenter,
      updateCostCenterDto,
    );
    return await this.costcenterRepository.save(editedCostCenter);
  }

  async remove(id: string): Promise<CostCenter> {
    const costcenter: CostCenter = await this.costcenterRepository.findOneBy({
      id,
    });
    return await this.costcenterRepository.softRemove(costcenter);
  }
}
