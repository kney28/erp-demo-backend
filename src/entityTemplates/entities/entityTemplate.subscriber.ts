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
import { EntityTemplate } from './entityTemplate.entity';
import {
  EntityTemplateLogs,
  LogEntityTemplateType,
} from './entityTemplateLogs.entity';

@EventSubscriber()
export class EntityTemplateSubscriber
  implements EntitySubscriberInterface<EntityTemplate>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(EntityTemplateLogs)
    private entitytemplatelogsRepository: Repository<EntityTemplateLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return EntityTemplate;
  }

  createLog(
    type: LogEntityTemplateType,
    event:
      | InsertEvent<EntityTemplate>
      | UpdateEvent<EntityTemplate>
      | SoftRemoveEvent<EntityTemplate>,
  ) {
    const entitytemplatelog: DeepPartial<EntityTemplateLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const entitytemplatelogs: EntityTemplateLogs =
      this.entitytemplatelogsRepository.create(entitytemplatelog);
    this.entitytemplatelogsRepository.save(entitytemplatelogs);
  }

  afterInsert(event: InsertEvent<EntityTemplate>) {
    this.createLog(LogEntityTemplateType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<EntityTemplate>) {
    this.createLog(LogEntityTemplateType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<EntityTemplate>) {
    this.createLog(LogEntityTemplateType.DELETE, event);
  }
}
