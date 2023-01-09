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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountingValidityService } from './accountingvalidity.service';
import { CreateAccountingValidityDto } from './dto/create-accountingvalidity.dto';
import { UpdateAccountingValidityDto } from './dto/update-accountingvalidity.dto';
import { AccountingValidity } from './entities/accountingvalidity.entity';

@Controller('accountingvalidity')
@UseInterceptors(ClassSerializerInterceptor)
export class AccountingValidityController {
  constructor(
    private readonly accountingValidityService: AccountingValidityService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createAccountingValidityDto: CreateAccountingValidityDto,
  ): Promise<AccountingValidity> {
    return this.accountingValidityService.create(createAccountingValidityDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<AccountingValidity[]> {
    return this.accountingValidityService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<AccountingValidity> {
    return this.accountingValidityService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateAccountingValidityDto: UpdateAccountingValidityDto,
  ): Promise<AccountingValidity> {
    return this.accountingValidityService.update(
      id,
      updateAccountingValidityDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<AccountingValidity> {
    return this.accountingValidityService.remove(id);
  }
}
