import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HcspecialtiessService } from './hcspecialtiess.service';
import { CreateHcspecialtiesDto } from './dto/create-hcspecialties.dto';
import { UpdateHcspecialtiesDto } from './dto/update-hcspecialties.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Hcspecialties } from './entities/hcspecialties.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('clinict-history/hcspecialtiess')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class HcspecialtiessController {
  constructor(private readonly hcspecialtiessService: HcspecialtiessService) {}

  @Post()
  create(
    @Body() createHcspecialtiesDto: CreateHcspecialtiesDto,
  ): Promise<Hcspecialties> {
    return this.hcspecialtiessService.create(createHcspecialtiesDto);
  }

  @Get()
  findAll(): Promise<Hcspecialties[]> {
    return this.hcspecialtiessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hcspecialties> {
    return this.hcspecialtiessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHcspecialtiesDto: UpdateHcspecialtiesDto,
  ): Promise<Hcspecialties> {
    return this.hcspecialtiessService.update(id, updateHcspecialtiesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hcspecialties> {
    return this.hcspecialtiessService.remove(id);
  }
}
