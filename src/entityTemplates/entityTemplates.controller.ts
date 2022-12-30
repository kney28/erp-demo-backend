import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { EntityTemplatesService } from './entitytemplates.service';
import { CreateEntityTemplateDto } from './dto/create-entitytemplate.dto';
import { UpdateEntityTemplateDto } from './dto/update-entitytemplate.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EntityTemplate } from './entities/entitytemplate.entity';

@Controller('entitytemplates')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class EntityTemplatesController {
  constructor(
    private readonly entityTemplatesService: EntityTemplatesService,
  ) {}

  @Post()
  create(
    @Body() createEntityTemplateDto: CreateEntityTemplateDto,
  ): Promise<EntityTemplate> {
    return this.entityTemplatesService.create(createEntityTemplateDto);
  }

  @Get()
  findAll(): Promise<EntityTemplate[]> {
    return this.entityTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EntityTemplate> {
    return this.entityTemplatesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntityTemplateDto: UpdateEntityTemplateDto,
  ): Promise<EntityTemplate> {
    return this.entityTemplatesService.update(id, updateEntityTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EntityTemplate> {
    return this.entityTemplatesService.remove(id);
  }
}
