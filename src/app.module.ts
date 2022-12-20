import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { DataSource } from 'typeorm';
import { ClsModule } from 'nestjs-cls';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ComplementsModule } from './complements/complements.module';
import { CountriesModule } from './countries/countries.module';
import { SocialsModule } from './socials/socials.module';
import { ContactTypeModule } from './contactType/contactType.module';
import { RegisterStatusModule } from './registerStatus/registerStatus.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { DepartmentsModule } from './departments/departments.module';
import { UserInterceptor } from './interceptors/user.interceptor';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { ThirdPersonsModule } from './thirdPersons/thirdPersons.module';
import { TypesSeatsModule } from './types-seats/types-seats.module';
import { AccountCatalogModule } from './account-catalog/account-catalog.module';
import { GeneralAccounting } from './generalAccounting/entities/generalaccounting.entity';
import { ThirdPartyAccountantsModule } from './third-party-accountants/third-party-accountants.module';
import { RetentionConceptsModule } from './retention-concepts/retention-concepts.module';
import { GroupsCupsModule } from './groups-cups/groups-cups.module';
import { AccountBalancesModule } from './account-balances/account-balances.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT_DB),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE,
      autoLoadEntities: process.env.AUTOLOADENTITIES === 'true',
      synchronize: process.env.SYNCHRONIZE === 'true',
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    AuthModule,
    UsersModule,
    ComplementsModule,
    CountriesModule,
    SocialsModule,
    ContactTypeModule,
    RegisterStatusModule,
    MunicipalitiesModule,
    DepartmentsModule,
    NeighborhoodsModule,
    ThirdPersonsModule,
    TypesSeatsModule,
    AccountCatalogModule,
    GeneralAccounting,
    ThirdPartyAccountantsModule,
    RetentionConceptsModule,
    GroupsCupsModule,
    AccountBalancesModule,
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: UserInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
