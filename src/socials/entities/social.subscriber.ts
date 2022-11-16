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
import { Social } from './social.entity';
import { LogSocialDate, SocialLogs } from './sociallogs.entity';

@EventSubscriber()
export class SocialSubscriber implements EntitySubscriberInterface<Social> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(SocialLogs)
    private sociallogsRepository: Repository<SocialLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Social;
  }

  createLog(
    type: LogSocialDate,
    event: InsertEvent<Social> | UpdateEvent<Social> | SoftRemoveEvent<Social>,
  ) {
    const sociallog: DeepPartial<SocialLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const sociallogs: SocialLogs = this.sociallogsRepository.create(sociallog);
    this.sociallogsRepository.save(sociallogs);
  }

  afterInsert(event: InsertEvent<Social>) {
    this.createLog(LogSocialDate.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Social>) {
    this.createLog(LogSocialDate.DELETE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Social>) {
    this.createLog(LogSocialDate.DELETE, event);
  }
}
