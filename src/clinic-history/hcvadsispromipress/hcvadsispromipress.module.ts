import { Module } from '@nestjs/common';
import { HcvadsispromipressService } from './hcvadsispromipress.service';
import { HcvadsispromipressController } from './hcvadsispromipress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hcvadsispromipres } from './entities/hcvadsispromipres.entity';
import { HcvadsispromipresLogs } from './entities/hcvadsispromipreslogs.entity';
import { HcvadsispromipresSubscriber } from './entities/hcvadsispromipres.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hcvadsispromipres]),
    TypeOrmModule.forFeature([HcvadsispromipresLogs]),
  ],
  controllers: [HcvadsispromipressController],
  providers: [HcvadsispromipressService, HcvadsispromipresSubscriber],
  exports: [HcvadsispromipressService],
})
export class HcvadsispromipressModule {}
