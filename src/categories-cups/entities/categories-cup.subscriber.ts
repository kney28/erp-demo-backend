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
import { CategoriesCup } from './categories-cup.entity';
import { CategoriesCupLogs } from './categories-cuplogs.entity';

@EventSubscriber()
export class CategoriesCupSubscriber
  implements EntitySubscriberInterface<CategoriesCup>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(CategoriesCupLogs)
    private categoriesCupLogsRepository: Repository<CategoriesCupLogs>,
    @InjectRepository(CategoriesCup)
    private categoriesCup: Repository<CategoriesCup>,
  ) {
    dataSource.subscribers.push(this);
  }
  listenTo() {
    return CategoriesCup;
  }
  createLog(
    type: number,
    event:
      | InsertEvent<CategoriesCup>
      | UpdateEvent<CategoriesCup>
      | SoftRemoveEvent<CategoriesCup>,
  ) {
    const categoriesCup: DeepPartial<CategoriesCupLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const categoriesCupLogs: CategoriesCupLogs =
      this.categoriesCupLogsRepository.create(categoriesCup);
    this.categoriesCupLogsRepository.save(categoriesCupLogs);
  }
  afterInsert(event: InsertEvent<CategoriesCup>) {
    this.createLog(1, event);
  }
  afterUpdate(event: UpdateEvent<CategoriesCup>) {
    this.createLog(2, event);
  }
  afterSoftRemove(event: SoftRemoveEvent<CategoriesCup>) {
    this.createLog(3, event);
  }
}
