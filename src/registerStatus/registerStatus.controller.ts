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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('registerstatus')
@ApiTags('Estado de registro')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class RegisterStatusController {
  constructor(private readonly registerStatusService: RegisterStatusService) {}

  @Post()
  create(
    @Body() createRegisterStatusDto: CreateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    return this.registerStatusService.create(createRegisterStatusDto);
  }

  @Get()
  findAll(): Promise<RegisterStatus[]> {
    return this.registerStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RegisterStatus> {
    return this.registerStatusService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegisterStatusDto: UpdateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    return this.registerStatusService.update(id, updateRegisterStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<RegisterStatus> {
    return this.registerStatusService.remove(id);
  }
}
