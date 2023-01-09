import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { DataSource } from 'typeorm';
import { ClsModule } from 'nestjs-cls';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';
import { SocialsModule } from './socials/socials.module';
import { ContactTypeModule } from './contactType/contactType.module';
import { RegisterStatusModule } from './registerStatus/registerStatus.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { DepartmentsModule } from './departments/departments.module';
import { UserInterceptor } from './interceptors/user.interceptor';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { TypesSeatsModule } from './types-seats/types-seats.module';
import { AccountCatalogModule } from './account-catalog/account-catalog.module';
import { AccountingValidityModule } from './accountingValidity/accountingvalidity.module';
import { OccupationsModule } from './occupations/occupations.module';
import { GeneralAccounting } from './generalAccounting/entities/generalaccounting.entity';
import { ThirdPartyAccountantsModule } from './third-party-accountants/third-party-accountants.module';
import { RetentionConceptsModule } from './retention-concepts/retention-concepts.module';
import { GroupsCupsModule } from './groups-cups/groups-cups.module';
import { AccountBalancesModule } from './account-balances/account-balances.module';
import { DetailCopaysAndFeesModule } from './detail-copays-and-fees/detailCopaysAndFees.module';

import { SubgroupsCupsModule } from './subgroups-cups/subgroups-cups.module';
import { CategoriesCupsModule } from './categories-cups/categories-cups.module';
import { ThirdPersonModule } from './third-person/third-person.module';
import { GroundsDenialModule } from './grounds-denial/grounds-denial.module';
import { SubcategoriesCupsModule } from './subcategories-cups/subcategories-cups.module';
import { RequirementsListsModule } from './requirements-lists/requirements-lists.module';
import { RequirementsListsDetailsModule } from './requirements-lists-details/requirements-lists-details.module';
import { HealthAdministratorsModule } from './health-administrators/healthadministrators.module';
import { SisbenLevelsModule } from './sisben-levels/sisbenlevels.module';
import { SpecialPopulationModule } from './special-population/specialpopulation.module';
import { HeadquartersModule } from './headquarters/headquarters.module';
import { AccountingSeatsModule } from './accountingSeats/accountingSeats.module';
import { DetailsAccountingSeatModule } from './detailsAccountingSeat/detailsAccountingSeat.module';
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
    CountriesModule,
    SocialsModule,
    ContactTypeModule,
    RegisterStatusModule,
    MunicipalitiesModule,
    DepartmentsModule,
    NeighborhoodsModule,
    ThirdPersonModule,
    TypesSeatsModule,
    AccountCatalogModule,
    AccountingValidityModule,
    OccupationsModule,
    GeneralAccounting,
    ThirdPartyAccountantsModule,
    RetentionConceptsModule,
    GroupsCupsModule,
    AccountBalancesModule,
    DetailCopaysAndFeesModule,
    SubgroupsCupsModule,
    CategoriesCupsModule,
    GroundsDenialModule,
    SubcategoriesCupsModule,
    RequirementsListsModule,
    RequirementsListsDetailsModule,
    HealthAdministratorsModule,
    SisbenLevelsModule,
    SpecialPopulationModule,
    HeadquartersModule,
    DetailsAccountingSeatModule,
    AccountingSeatsModule,
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
