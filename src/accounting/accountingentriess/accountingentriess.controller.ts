import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountingentriessService } from './accountingentriess.service';
import { CreateAccountingentriesDto } from './dto/create-accountingentries.dto';
import { UpdateAccountingentriesDto } from './dto/update-accountingentries.dto';
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Accountingentries } from './entities/accountingentries.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounting/accountingentriess')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class AccountingentriessController {
  constructor(
    private readonly accountingentriessService: AccountingentriessService,
  ) {}

  @Post()
  create(
    @Body() createAccountingentriesDto: CreateAccountingentriesDto,
  ): Promise<Accountingentries> {
    return this.accountingentriessService.create(createAccountingentriesDto);
  }

  @Get()
  findAll(): Promise<Accountingentries[]> {
    return this.accountingentriessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accountingentries> {
    return this.accountingentriessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountingentriesDto: UpdateAccountingentriesDto,
  ): Promise<Accountingentries> {
    return this.accountingentriessService.update(
      id,
      updateAccountingentriesDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Accountingentries> {
    return this.accountingentriessService.remove(id);
  }
}
