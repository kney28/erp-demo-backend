import { InjectRepository } from '@nestjs/typeorm';
import { ClsService } from 'nestjs-cls';
import {
  DataSource,
  DeepPartial,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  Repository,
  SoftRemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { SpecialPopulation } from './specialpopulation.entity';
import {
  LogSpecialPopulationType,
  SpecialPopulationLogs,
} from './specialpopulationlogs.entity';

@EventSubscriber()
export class SpecialPopulationSubscriber
  implements EntitySubscriberInterface<SpecialPopulation>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SpecialPopulationLogs)
    private specialpopulatiologsRepository: Repository<SpecialPopulationLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return SpecialPopulation;
  }

  createLog(
    type: LogSpecialPopulationType,
    event:
      | InsertEvent<SpecialPopulation>
      | UpdateEvent<SpecialPopulation>
      | SoftRemoveEvent<SpecialPopulation>,
  ) {
    const specialpopulationsonlog: DeepPartial<SpecialPopulationLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const specialpopulationlogs: SpecialPopulationLogs =
      this.specialpopulatiologsRepository.create(specialpopulationsonlog);
    this.specialpopulatiologsRepository.save(specialpopulationlogs);
  }

  afterInsert(event: InsertEvent<SpecialPopulation>) {
    this.createLog(LogSpecialPopulationType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<SpecialPopulation>) {
    this.createLog(LogSpecialPopulationType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<SpecialPopulation>) {
    this.createLog(LogSpecialPopulationType.DELETE, event);
  }
}
