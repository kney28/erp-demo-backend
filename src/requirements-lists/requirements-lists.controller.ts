import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequirementsListsService } from './requirements-lists.service';
import { CreateRequirementsListDto } from './dto/create-requirements-list.dto';
import { UpdateRequirementsListDto } from './dto/update-requirements-list.dto';

@Controller('requirements-lists')
export class RequirementsListsController {
  constructor(
    private readonly requirementsListsService: RequirementsListsService,
  ) {}

  @Post()
  create(@Body() createRequirementsListDto: CreateRequirementsListDto) {
    return this.requirementsListsService.create(createRequirementsListDto);
  }

  @Get()
  findAll() {
    return this.requirementsListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementsListsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRequirementsListDto: UpdateRequirementsListDto,
  ) {
    return this.requirementsListsService.update(id, updateRequirementsListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requirementsListsService.remove(id);
  }
}
