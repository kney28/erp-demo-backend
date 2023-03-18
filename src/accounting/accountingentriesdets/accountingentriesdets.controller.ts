import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountingentriesdetsService } from './accountingentriesdets.service';
import { CreateAccountingentriesdetDto } from './dto/create-accountingentriesdet.dto';
import { UpdateAccountingentriesdetDto } from './dto/update-accountingentriesdet.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accountingentriesdet } from './entities/accountingentriesdet.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accountingentriesdets')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccountingentriesdetsController {
  constructor(
    private readonly accountingentriesdetsService: AccountingentriesdetsService,
  ) {}

  @Post()
  create(
    @Body() createAccountingentriesdetDto: CreateAccountingentriesdetDto,
  ): Promise<Accountingentriesdet> {
    return this.accountingentriesdetsService.create(
      createAccountingentriesdetDto,
    );
  }

  @Get()
  findAll(): Promise<Accountingentriesdet[]> {
    return this.accountingentriesdetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accountingentriesdet> {
    return this.accountingentriesdetsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountingentriesdetDto: UpdateAccountingentriesdetDto,
  ): Promise<Accountingentriesdet> {
    return this.accountingentriesdetsService.update(
      id,
      updateAccountingentriesdetDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accountingentriesdet> {
    return this.accountingentriesdetsService.remove(id);
  }
}
