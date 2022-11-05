import { Module } from '@nestjs/common';
import { ContactTypeService } from './contact-type.service';
import { ContactTypeController } from './contact-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactType } from './entities/contact-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactType])],
  controllers: [ContactTypeController],
  providers: [ContactTypeService],
})
export class ContactTypeModule {}
