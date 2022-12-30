import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroundsDenialService } from './grounds-denial.service';
import { CreateGroundsDenialDto } from './dto/create-grounds-denial.dto';
import { UpdateGroundsDenialDto } from './dto/update-grounds-denial.dto';
import { GroundsDenial } from './entities/grounds-denial.entity';

@Controller('grounds-denial')
export class GroundsDenialController {
  constructor(private readonly groundsDenialService: GroundsDenialService) {}

  @Post()
  create(
    @Body() createGroundsDenialDto: CreateGroundsDenialDto,
  ): Promise<GroundsDenial> {
    return this.groundsDenialService.create(createGroundsDenialDto);
  }

  @Get()
  findAll(): Promise<GroundsDenial[]> {
    return this.groundsDenialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GroundsDenial> {
    return this.groundsDenialService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroundsDenialDto: UpdateGroundsDenialDto,
  ): Promise<GroundsDenial> {
    return this.groundsDenialService.update(id, updateGroundsDenialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<GroundsDenial> {
    return this.groundsDenialService.remove(id);
  }
}
