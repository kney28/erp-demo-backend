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
import { ContactType } from './contactType.entity';
import { Contacttypelogs, LogContactTypeDate } from './contacttypelogs.entity';

@EventSubscriber()
export class ContactTypeSubscriber
  implements EntitySubscriberInterface<ContactType>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(Contacttypelogs)
    private contacttypelogsRepository: Repository<Contacttypelogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return ContactType;
  }

  createLog(
    type: LogContactTypeDate,
    event:
      | InsertEvent<ContactType>
      | UpdateEvent<ContactType>
      | SoftRemoveEvent<ContactType>,
  ) {
    const contacttypelog: DeepPartial<Contacttypelogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const contacttypelogs: Contacttypelogs =
      this.contacttypelogsRepository.create(contacttypelog);
    this.contacttypelogsRepository.save(contacttypelogs);
  }

  afterInsert(event: InsertEvent<ContactType>) {
    this.createLog(LogContactTypeDate.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<ContactType>) {
    this.createLog(LogContactTypeDate.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<ContactType>) {
    this.createLog(LogContactTypeDate.DELETE, event);
  }
}
