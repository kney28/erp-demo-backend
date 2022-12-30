import { Module } from '@nestjs/common';
import { SubcategoriesCupsService } from './subcategories-cups.service';
import { SubcategoriesCupsController } from './subcategories-cups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoriesCup } from './entities/subcategories-cup.entity';
import { SubcategoriesCupLogs } from './entities/subcategories-cuplogs.entity';
import { SubcategoriesCupSubscriber } from './entities/subcategories-cup.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubcategoriesCup]),
    TypeOrmModule.forFeature([SubcategoriesCupLogs]),
  ],
  controllers: [SubcategoriesCupsController],
  providers: [SubcategoriesCupsService, SubcategoriesCupSubscriber],
})
export class SubcategoriesCupsModule {}
