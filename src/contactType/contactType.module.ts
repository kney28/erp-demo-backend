import { Module } from '@nestjs/common';
import { ContactTypeService } from './contactType.service';
import { ContactTypeController } from './contactType.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactType } from './entities/contactType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactType])],
  controllers: [ContactTypeController],
  providers: [ContactTypeService],
})
export class ContactTypeModule {}
