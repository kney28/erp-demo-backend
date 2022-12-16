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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountCatalogService } from './account-catalog.service';
import { CreateAccountCatalogDto } from './dto/create-account-catalog.dto';
import { UpdateAccountCatalogDto } from './dto/update-account-catalog.dto';
import { AccountCatalog } from './entities/account-catalog.entity';

@Controller('account-catalog')
@ApiTags('Catálogo de cuentas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AccountCatalogController {
  constructor(private readonly accountCatalogService: AccountCatalogService) {}

  @Post()
  create(
    @Body() createAccountCatalogDto: CreateAccountCatalogDto,
  ): Promise<AccountCatalog> {
    return this.accountCatalogService.create(createAccountCatalogDto);
  }
  @Get()
  findAll(): Promise<AccountCatalog[]> {
    return this.accountCatalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AccountCatalog> {
    return this.accountCatalogService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountCatalogDto: UpdateAccountCatalogDto,
  ): Promise<AccountCatalog> {
    return this.accountCatalogService.update(id, updateAccountCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AccountCatalog> {
    return this.accountCatalogService.remove(id);
  }
}
