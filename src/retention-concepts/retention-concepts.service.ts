import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRetentionConceptDto } from './dto/create-retention-concept.dto';
import { UpdateRetentionConceptDto } from './dto/update-retention-concept.dto';
import { RetentionConcept } from './entities/retention-concept.entity';

@Injectable()
export class RetentionConceptsService {
  constructor(
    @InjectRepository(RetentionConcept)
    private retentionConcept: Repository<RetentionConcept>,
  ) {}

  create(
    createRetentionConceptDto: CreateRetentionConceptDto,
  ): Promise<RetentionConcept> {
    const retention: RetentionConcept = this.retentionConcept.create(
      createRetentionConceptDto,
    );
    return this.retentionConcept.save(retention);
  }

  findAll(): Promise<RetentionConcept[]> {
    return this.retentionConcept.find();
  }

  findOne(id: string): Promise<RetentionConcept> {
    return this.retentionConcept.findOneBy({ id });
  }

  async update(
    id: string,
    updateRetentionConceptDto: UpdateRetentionConceptDto,
  ): Promise<RetentionConcept> {
    const retention: RetentionConcept = await this.retentionConcept.findOneBy({
      id,
    });

    const editedRetention: RetentionConcept = Object.assign(
      retention,
      updateRetentionConceptDto,
    );

    return this.retentionConcept.save(editedRetention);
  }

  async remove(id: string): Promise<RetentionConcept> {
    const retention: RetentionConcept = await this.retentionConcept.findOneBy({
      id,
    });
    return this.retentionConcept.softRemove(retention);
  }
}
