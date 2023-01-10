import { Module } from '@nestjs/common';
import { PercentagesQxSoatDetailService } from './percentages-qx-soat-detail.service';
import { PercentagesQxSoatDetailController } from './percentages-qx-soat-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PercentagesQxSoatDetail } from './entities/percentages-qx-soat-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PercentagesQxSoatDetail])],
  controllers: [PercentagesQxSoatDetailController],
  providers: [PercentagesQxSoatDetailService],
})
export class PercentagesQxSoatDetailModule {}
