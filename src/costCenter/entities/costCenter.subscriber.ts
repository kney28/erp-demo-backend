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
import { CostCenter } from './costcenter.entity';
import { CostCenterLogs, LogCostCenterType } from './costcenterlogs.entity';

@EventSubscriber()
export class CostCenterSubscriber
  implements EntitySubscriberInterface<CostCenter>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CostCenterLogs)
    private costcenterlogsRepository: Repository<CostCenterLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return CostCenter;
  }

  createLog(
    type: LogCostCenterType,
    event:
      | InsertEvent<CostCenter>
      | UpdateEvent<CostCenter>
      | SoftRemoveEvent<CostCenter>,
  ) {
    const costcenterlog: DeepPartial<CostCenterLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const costcenterlogs: CostCenterLogs =
      this.costcenterlogsRepository.create(costcenterlog);
    this.costcenterlogsRepository.save(costcenterlogs);
  }

  afterInsert(event: InsertEvent<CostCenter>) {
    this.createLog(LogCostCenterType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<CostCenter>) {
    this.createLog(LogCostCenterType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<CostCenter>) {
    this.createLog(LogCostCenterType.DELETE, event);
  }
}
