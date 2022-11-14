import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RegisterStatusService } from './registerStatus.service';
import { CreateRegisterStatusDto } from './dto/create-registerStatus.dto';
import { UpdateRegisterStatusDto } from './dto/update-registerStatus.dto';
import { RegisterStatus } from './entities/registerStatus.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('registerstatus')
export class RegisterStatusController {
  constructor(private readonly registerStatusService: RegisterStatusService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createRegisterStatusDto: CreateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    return this.registerStatusService.create(createRegisterStatusDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<RegisterStatus[]> {
    return this.registerStatusService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<RegisterStatus> {
    return this.registerStatusService.findOneById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateRegisterStatusDto: UpdateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    return this.registerStatusService.update(id, updateRegisterStatusDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<RegisterStatus> {
    return this.registerStatusService.remove(id);
  }
}
