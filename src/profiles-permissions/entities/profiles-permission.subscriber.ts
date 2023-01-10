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
import { ProfilesPermissionLogs } from './profiles-permission-logs.entity';
import { ProfilesPermission } from './profiles-permission.entity';

@EventSubscriber()
export class ProfilesPermissionSubscriber
  implements EntitySubscriberInterface<ProfilesPermission>
{
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(ProfilesPermissionLogs)
    private ProfilesPermissionLogsRepository: Repository<ProfilesPermissionLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return ProfilesPermission;
  }

  createLog(
    type: number,
    event:
      | InsertEvent<ProfilesPermission>
      | UpdateEvent<ProfilesPermission>
      | SoftRemoveEvent<ProfilesPermission>,
  ) {
    const profilesPermissionLog: DeepPartial<ProfilesPermissionLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const profilesPermissionLogs: ProfilesPermissionLogs =
      this.ProfilesPermissionLogsRepository.create(profilesPermissionLog);
    this.ProfilesPermissionLogsRepository.save(profilesPermissionLogs);
  }

  afterInsert(event: InsertEvent<ProfilesPermission>) {
    this.createLog(1, event);
  }

  afterUpdate(event: UpdateEvent<ProfilesPermission>) {
    this.createLog(2, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<ProfilesPermission>) {
    this.createLog(3, event);
  }
}
