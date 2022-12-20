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
import { ClsService } from 'nestjs-cls';
import { InjectRepository } from '@nestjs/typeorm';
import { SubgroupsCup } from './subgroups-cup.entity';
import { SubgroupsCupLogs } from './subgroups-cuplogs.entity';

@EventSubscriber()
export class SubgroupsCupSubscriber
  implements EntitySubscriberInterface<SubgroupsCup>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SubgroupsCupLogs)
    private subgroupsCupLogsRepository: Repository<SubgroupsCupLogs>,
    @InjectRepository(SubgroupsCup)
    private subgroupsCup: Repository<SubgroupsCup>,
  ) {
    dataSource.subscribers.push(this);
  }
  listenTo() {
    return SubgroupsCup;
  }
  createLog(
    type: number,
    event:
      | InsertEvent<SubgroupsCup>
      | UpdateEvent<SubgroupsCup>
      | SoftRemoveEvent<SubgroupsCup>,
  ) {
    const subgroupsCup: DeepPartial<SubgroupsCupLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const subgroupsCupLogs: SubgroupsCupLogs =
      this.subgroupsCupLogsRepository.create(subgroupsCup);
    this.subgroupsCupLogsRepository.save(subgroupsCupLogs);
  }
  afterInsert(event: InsertEvent<SubgroupsCup>) {
    this.createLog(1, event);
  }
  afterUpdate(event: UpdateEvent<SubgroupsCup>) {
    this.createLog(2, event);
  }
  afterSoftRemove(event: SoftRemoveEvent<SubgroupsCup>) {
    this.createLog(3, event);
  }
}
