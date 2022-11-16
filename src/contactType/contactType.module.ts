import { Module } from '@nestjs/common';
import { ContactTypeService } from './contactType.service';
import { ContactTypeController } from './contactType.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactType } from './entities/contactType.entity';
import { Contacttypelogs } from './entities/contacttypelogs.entity';
import { ContactTypeSubscriber } from './entities/contacttype.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactType]),
    TypeOrmModule.forFeature([Contacttypelogs]),
  ],
  controllers: [ContactTypeController],
  providers: [ContactTypeService, ContactTypeSubscriber],
  exports: [ContactTypeService],
})
export class ContactTypeModule {}
