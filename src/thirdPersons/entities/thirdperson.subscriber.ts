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
import { ThirdPerson } from './thirdPerson.entity';
import { LogThirdPersonType, Thirdpersonlogs } from './thirdpersonlogs.entity';

@EventSubscriber()
export class ThirdPersonSubscriber
  implements EntitySubscriberInterface<ThirdPerson>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Thirdpersonlogs)
    private thirdpersonlogsRepository: Repository<Thirdpersonlogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return ThirdPerson;
  }

  createLog(
    type: LogThirdPersonType,
    event:
      | InsertEvent<ThirdPerson>
      | UpdateEvent<ThirdPerson>
      | SoftRemoveEvent<ThirdPerson>,
  ) {
    const thirdpersonlog: DeepPartial<Thirdpersonlogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const thirdpersonlogs: Thirdpersonlogs =
      this.thirdpersonlogsRepository.create(thirdpersonlog);
    this.thirdpersonlogsRepository.save(thirdpersonlogs);
  }

  afterInsert(event: InsertEvent<ThirdPerson>) {
    this.createLog(LogThirdPersonType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<ThirdPerson>) {
    this.createLog(LogThirdPersonType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<ThirdPerson>) {
    this.createLog(LogThirdPersonType.DELETE, event);
  }
}
