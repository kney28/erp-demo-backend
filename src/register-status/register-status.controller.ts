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
import { RegisterStatusService } from './register-status.service';
import { CreateRegisterStatusDto } from './dto/create-register-status.dto';
import { UpdateRegisterStatusDto } from './dto/update-register-status.dto';
import { RegisterStatus } from './entities/register-status.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('register-status')
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
