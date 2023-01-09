import { Module } from '@nestjs/common';
import { HealthProvidersService } from './healthproviders.service';
import { HealthProvidersController } from './healthproviders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthProvider } from './entities/healthprovider.entity';
import { HealthProviderLogs } from './entities/healthproviderlogs.entity';
import { HealthProviderSubscriber } from './entities/healthprovider.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([HealthProvider]),
    TypeOrmModule.forFeature([HealthProviderLogs]),
  ],
  controllers: [HealthProvidersController],
  providers: [HealthProvidersService, HealthProviderSubscriber],
  exports: [HealthProvidersService],
})
export class HealthProvidersModule {}
