import { Module } from '@nestjs/common';
import { RetentionConceptsService } from './retention-concepts.service';
import { RetentionConceptsController } from './retention-concepts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RetentionConcept } from './entities/retention-concept.entity';
import { RetentionConceptLogs } from './entities/retention-conceptlogs.entity';
import { RetentionConceptSubscriber } from './entities/retention-concept.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([RetentionConcept]),
    TypeOrmModule.forFeature([RetentionConceptLogs]),
  ],
  controllers: [RetentionConceptsController],
  providers: [RetentionConceptsService, RetentionConceptSubscriber],
})
export class RetentionConceptsModule {}
