import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { GeneralAccountingService } from './generalaccounting.service';
import { CreateGeneralAccountingDto } from './dto/create-generalaccounting.dto';
import { UpdateGeneralAccountingDto } from './dto/update-generalaccounting.dto';
import { GeneralAccounting } from './entities/generalaccounting.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('generalaccounting')
@UseInterceptors(ClassSerializerInterceptor)
export class GeneralAccountingController {
  constructor(
    private readonly generalAccountingService: GeneralAccountingService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createGeneralAccountingDto: CreateGeneralAccountingDto,
  ): Promise<GeneralAccounting> {
    return this.generalAccountingService.create(createGeneralAccountingDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<GeneralAccounting[]> {
    return this.generalAccountingService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<GeneralAccounting> {
    return this.generalAccountingService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateGeneralAccountingDto: UpdateGeneralAccountingDto,
  ): Promise<GeneralAccounting> {
    return this.generalAccountingService.update(id, updateGeneralAccountingDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<GeneralAccounting> {
    return this.generalAccountingService.remove(id);
  }
}
