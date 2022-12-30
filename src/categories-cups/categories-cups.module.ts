import { Module } from '@nestjs/common';
import { CategoriesCupsService } from './categories-cups.service';
import { CategoriesCupsController } from './categories-cups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesCup } from './entities/categories-cup.entity';
import { CategoriesCupSubscriber } from './entities/categories-cup.subscriber';
import { CategoriesCupLogs } from './entities/categories-cuplogs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriesCup]),
    TypeOrmModule.forFeature([CategoriesCupLogs]),
    CategoriesCupsModule,
  ],
  controllers: [CategoriesCupsController],
  providers: [CategoriesCupsService, CategoriesCupSubscriber],
  exports: [CategoriesCupsService],
})
export class CategoriesCupsModule {}
