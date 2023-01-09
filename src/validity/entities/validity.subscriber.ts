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
import { Validity } from './validity.entity';
import { LogValidityType, ValidityLogs } from './validitylogs.entity';

@EventSubscriber()
export class ValiditySubscriber implements EntitySubscriberInterface<Validity> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ValidityLogs)
    private validitylogsRepository: Repository<ValidityLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Validity;
  }

  createLog(
    type: LogValidityType,
    event:
      | InsertEvent<Validity>
      | UpdateEvent<Validity>
      | SoftRemoveEvent<Validity>,
  ) {
    const validitylog: DeepPartial<ValidityLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const validitylogs: ValidityLogs =
      this.validitylogsRepository.create(validitylog);
    this.validitylogsRepository.save(validitylogs);
  }

  afterInsert(event: InsertEvent<Validity>) {
    this.createLog(LogValidityType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Validity>) {
    this.createLog(LogValidityType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Validity>) {
    this.createLog(LogValidityType.DELETE, event);
  }
}
