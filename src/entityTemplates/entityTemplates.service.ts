import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntityTemplateDto } from './dto/create-entityTemplate.dto';
import { UpdateEntityTemplateDto } from './dto/update-entityTemplate.dto';
import { EntityTemplate } from './entities/entityTemplate.entity';

@Injectable()
export class EntityTemplatesService {
  constructor(
    @InjectRepository(EntityTemplate)
    private entitytemplateRepository: Repository<EntityTemplate>,
  ) {}

  async create(
    createEntityTemplateDto: CreateEntityTemplateDto,
  ): Promise<EntityTemplate> {
    const entityTemplate: EntityTemplate = this.entitytemplateRepository.create(
      createEntityTemplateDto,
    );
    return await this.entitytemplateRepository.save(entityTemplate);
  }

  findAll(): Promise<EntityTemplate[]> {
    return this.entitytemplateRepository.find();
  }

  findOne(id: string): Promise<EntityTemplate> {
    return this.entitytemplateRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateEntityTemplateDto: UpdateEntityTemplateDto,
  ): Promise<EntityTemplate> {
    const entitytemplate: EntityTemplate =
      await this.entitytemplateRepository.findOneBy({ id });
    const editedEntityTemplate: EntityTemplate = Object.assign(
      entitytemplate,
      updateEntityTemplateDto,
    );
    return await this.entitytemplateRepository.save(editedEntityTemplate);
  }

  async remove(id: string): Promise<EntityTemplate> {
    const entitytemplate: EntityTemplate =
      await this.entitytemplateRepository.findOneBy({ id });
    return await this.entitytemplateRepository.softRemove(entitytemplate);
  }
}
