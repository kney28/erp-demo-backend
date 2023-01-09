import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AddressLogs } from './entities/addresslogs.entity';
import { AddressSubscriber } from './entities/address.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([AddressLogs]),
  ],
  controllers: [AddressesController],
  providers: [AddressesService, AddressSubscriber],
  exports: [AddressesService],
})
export class AddressesModule {}
