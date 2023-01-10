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
import { Profile } from './profile.entity';
import { LogProfileType, ProfileLogs } from './profilelogs.entity';

@EventSubscriber()
export class ProfileSubscriber implements EntitySubscriberInterface<Profile> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ProfileLogs)
    private profilelogsRepository: Repository<ProfileLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Profile;
  }

  createLog(
    type: LogProfileType,
    event:
      | InsertEvent<Profile>
      | UpdateEvent<Profile>
      | SoftRemoveEvent<Profile>,
  ) {
    const profilelog: DeepPartial<ProfileLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const profilelogs: ProfileLogs =
      this.profilelogsRepository.create(profilelog);
    this.profilelogsRepository.save(profilelogs);
  }

  afterInsert(event: InsertEvent<Profile>) {
    this.createLog(LogProfileType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Profile>) {
    this.createLog(LogProfileType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Profile>) {
    this.createLog(LogProfileType.DELETE, event);
  }
}
