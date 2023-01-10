import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePercentagesQxSoatDetailDto } from './dto/create-percentages-qx-soat-detail.dto';
import { UpdatePercentagesQxSoatDetailDto } from './dto/update-percentages-qx-soat-detail.dto';
import { PercentagesQxSoatDetail } from './entities/percentages-qx-soat-detail.entity';

@Injectable()
export class PercentagesQxSoatDetailService {
  constructor(
    @InjectRepository(PercentagesQxSoatDetail)
    private percentagesQxSoatDetail: Repository<PercentagesQxSoatDetail>,
  ) {}

  create(
    createPercentagesQxSoatDetailDto: CreatePercentagesQxSoatDetailDto,
  ): Promise<PercentagesQxSoatDetail> {
    const percentages: PercentagesQxSoatDetail =
      this.percentagesQxSoatDetail.create(createPercentagesQxSoatDetailDto);
    return this.percentagesQxSoatDetail.save(percentages);
  }

  findAll(): Promise<PercentagesQxSoatDetail[]> {
    return this.percentagesQxSoatDetail.find();
  }

  findOne(id: string): Promise<PercentagesQxSoatDetail> {
    return this.percentagesQxSoatDetail.findOneBy({ id });
  }

  async update(
    id: string,
    updatePercentagesQxSoatDetailDto: UpdatePercentagesQxSoatDetailDto,
  ): Promise<PercentagesQxSoatDetail> {
    const percentages: PercentagesQxSoatDetail =
      await this.percentagesQxSoatDetail.findOneBy({
        id,
      });
    const editedPercentages: PercentagesQxSoatDetail = Object.assign(
      percentages,
      updatePercentagesQxSoatDetailDto,
    );
    return this.percentagesQxSoatDetail.save(editedPercentages);
  }

  async remove(id: string): Promise<PercentagesQxSoatDetail> {
    const percentages: PercentagesQxSoatDetail =
      await this.percentagesQxSoatDetail.findOneBy({
        id,
      });
    return this.percentagesQxSoatDetail.softRemove(percentages);
  }
}
