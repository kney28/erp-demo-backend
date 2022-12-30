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
import { SubcategoriesCupLogs } from './subcategories-cuplogs.entity';
import { SubcategoriesCup } from './subcategories-cup.entity';

@EventSubscriber()
export class SubcategoriesCupSubscriber
  implements EntitySubscriberInterface<SubcategoriesCup>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SubcategoriesCupLogs)
    private subcategoriesCupLogsRepository: Repository<SubcategoriesCupLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return SubcategoriesCup;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<SubcategoriesCup>
      | UpdateEvent<SubcategoriesCup>
      | SoftRemoveEvent<SubcategoriesCup>,
  ) {
    const subcategoriesCup: DeepPartial<SubcategoriesCupLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const subcategoriesCupLogs: SubcategoriesCupLogs =
      this.subcategoriesCupLogsRepository.create(subcategoriesCup);
    this.subcategoriesCupLogsRepository.save(subcategoriesCupLogs);
  }

  afterInsert(event: InsertEvent<SubcategoriesCup>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<SubcategoriesCup>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<SubcategoriesCup>) {
    this.createLog(3, event);
  }
}
