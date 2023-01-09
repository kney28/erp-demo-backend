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
import { Address } from './address.entity';
import { AddressLogs, LogAddressType } from './addresslogs.entity';

@EventSubscriber()
export class AddressSubscriber implements EntitySubscriberInterface<Address> {
  constructor(
    dataSource: DataSource,
    private readonly cls: ClsService,
    @InjectRepository(AddressLogs)
    private addresslogsRepository: Repository<AddressLogs>,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Address;
  }

  createLog(
    type: LogAddressType,
    event:
      | InsertEvent<Address>
      | UpdateEvent<Address>
      | SoftRemoveEvent<Address>,
  ) {
    const addressonlog: DeepPartial<AddressLogs> = {
      value: JSON.stringify(event.entity),
      type: type,
      user: this.cls.get('user'),
    };
    const addresslogs: AddressLogs =
      this.addresslogsRepository.create(addressonlog);
    this.addresslogsRepository.save(addresslogs);
  }

  afterInsert(event: InsertEvent<Address>) {
    this.createLog(LogAddressType.CREATE, event);
  }

  afterUpdate(event: UpdateEvent<Address>) {
    this.createLog(LogAddressType.UPDATE, event);
  }

  afterSoftRemove(event: SoftRemoveEvent<Address>) {
    this.createLog(LogAddressType.DELETE, event);
  }
}
