/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClsModule } from 'nestjs-cls';
import { DataSource } from 'typeorm';

import { AccountBalancesModule } from './account-balances/account-balances.module';
import { AccountCatalogModule } from './account-catalog/account-catalog.module';
import { AccountingSeatsModule } from './accountingSeats/accountingSeats.module';
import { AccountingValidityModule } from './accountingValidity/accountingvalidity.module';
import { AddressesModule } from './addresses/addresses.module';
import { AnnualClosingModule } from './annual-closing/annualclosing.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesCupsModule } from './categories-cups/categories-cups.module';
import { CompaniesModule } from './companies/companies.module';
import { ContactTypeModule } from './contactType/contactType.module';
import { CostCenterModule } from './costCenter/costCenter.module';
import { CountriesModule } from './countries/countries.module';
import { DepartmentsModule } from './departments/departments.module';
import { DetailCopaysAndFeesModule } from './detail-copays-and-fees/detailCopaysAndFees.module';
import { DetailsAccountingSeatModule } from './detailsAccountingSeat/detailsAccountingSeat.module';
import { GeneralAccounting } from './generalAccounting/entities/generalaccounting.entity';
import { GroundsDenialModule } from './grounds-denial/grounds-denial.module';
import { GroupsCupsModule } from './hiring/groups-cups/groups-cups.module';
import { HealthAdministratorsModule } from './health-administrators/healthadministrators.module';
import { UserInterceptor } from './interceptors/user.interceptor';
import { MonthlyClosureModule } from './monthly-closure/monthlyclosure.module';
import { MonthlyOpeningModule } from './monthly-opening/monthlyopening.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { OccupationsModule } from './admissions/occupations/occupations.module';
import { ProfilesPermissionsModule } from './profiles-permissions/profiles-permissions.module';
import { ProfilesModule } from './profiles/profiles.module';
import { RegisterStatusModule } from './registerStatus/registerStatus.module';
import { RequirementsListsDetailsModule } from './requirements-lists-details/requirements-lists-details.module';
import { RequirementsListsModule } from './requirements-lists/requirements-lists.module';
import { RetentionConceptsModule } from './retention-concepts/retention-concepts.module';
import { SisbenLevelsModule } from './sisben-levels/sisbenlevels.module';
import { SocialsModule } from './socials/socials.module';
import { SpecialPopulationModule } from './special-population/specialpopulation.module';
import { SubcategoriesCupsModule } from './subcategories-cups/subcategories-cups.module';
import { SubgroupsCupsModule } from './subgroups-cups/subgroups-cups.module';
import { ThirdPartyAccountantsModule } from './third-party-accountants/third-party-accountants.module';
import { ThirdPersonModule } from './third-person/third-person.module';
import { TypesSeatsModule } from './types-seats/types-seats.module';
import { UsersModule } from './users/users.module';

import { CareservicesModule } from './billing/careservices/careservices.module';
import { DetailnumerationdiansModule } from './billing/detailnumerationdians/detailnumerationdians.module';
import { NumerationdiansModule } from './billing/numerationdians/numerationdians.module';

import { FloorsModule } from './hospitalization/floors/floors.module';
import { LocationsModule } from './hospitalization/locations/locations.module';
import { BedsModule } from './hospitalization/beds/beds.module';
import { FeesModule } from './hospitalization/fees/fees.module';

import { HolidayssModule } from './configuration/holidayss/holidayss.module';
import { PermissionssModule } from './configuration/permissionss/permissionss.module';
import { ValidityModule } from './configuration/validity/validity.module';
import { ConsecutivecontrolvaliditiessModule } from './configuration/consecutivecontrolvaliditiess/consecutivecontrolvaliditiess.module';

import { HeadquarterssModule } from './admissions/headquarterss/headquarterss.module';
import { HealthproviderssModule } from './admissions/healthproviderss/healthproviderss.module';
import { ChargesModule } from './admissions/charges/charges.module';
import { GroundsdenialcaresModule } from './admissions/groundsdenialcares/groundsdenialcares.module';
import { SisbenlevelsModule } from './admissions/sisbenlevels/sisbenlevels.module';
import { SpecialpopulationsModule } from './admissions/specialpopulations/specialpopulations.module';

import { CategoriescupssModule } from './hiring/categoriescupss/categoriescupss.module';
import { EntitytemplatesModule } from './hiring/entitytemplates/entitytemplates.module';
import { ParameterizationcupssModule } from './hiring/parameterizationcupss/parameterizationcupss.module';
import { SubcatcupssModule } from './hiring/subcatcupss/subcatcupss.module';
import { SubgruposcupssModule } from './hiring/subgruposcupss/subgruposcupss.module';

// Contable
import { AcccongensModule } from './accounting/acccongens/acccongens.module';
import { AccountingtermssModule } from './accounting/accountingtermss/accountingtermss.module';
import { AcccostcenterssModule } from './accounting/acccostcenterss/acccostcenterss.module';
import { AccbalmovsModule } from './accounting/accbalmovs/accbalmovs.module';
import { AccentsubdetsModule } from './accounting/accentsubdets/accentsubdets.module';
import { AccinicialrunsModule } from './accounting/accinicialruns/accinicialruns.module';
import { AccountingentriesdetsModule } from './accounting/accountingentriesdets/accountingentriesdets.module';
import { Accountingentries } from './accounting/accountingentriess/entities/accountingentries.entity';

//Historia Clinica
import { HcdignosessModule } from './clinic-history/hcdignosess/hcdignosess.module';
import { HcspecialtiessModule } from './clinic-history/hcspecialtiess/hcspecialtiess.module';
import { HchealthprosModule } from './clinic-history/hchealthpros/hchealthpros.module';

// Bienes
import { GooparsModule } from './goods/goopars/goopars.module';
import { GooconfsModule } from './goods/gooconfs/gooconfs.module'; 
import { GooclasModule } from './goods/gooclas/gooclas.module';

// Cuentas por cobrar
import { CxcaccrecsModule } from './accounts-receivable/cxcaccrecs/cxcaccrecs.module';
import { CxccouconsModule } from './accounts-receivable/cxccoucons/cxccoucons.module';

// Cuentas por pagar
import { CxpproviderssModule } from './accounts-payable/cxpproviderss/cxpproviderss.module';
import { CxpcouconsModule } from './accounts-payable/cxpcoucons/cxpcoucons.module';

// Citas medicas
import { AppreacansModule } from './medical-appointments/appreacans/appreacans.module';
import { AppofficessModule } from './medical-appointments/appofficess/appofficess.module';

// Inventarios
import { InvaccparsModule } from './inventory/invaccpars/invaccpars.module';
import { InvmanufrolessModule } from './inventory/invmanufroless/invmanufroless.module';
import { InvunitsmeasModule } from './inventory/invunitsmeas/invunitsmeas.module';
import { InvcumsModule } from './inventory/invcums/invcums.module';
import { InvpharforsModule } from './inventory/invpharfors/invpharfors.module';

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
    AccountBalancesModule,
    AccountCatalogModule,
    AccountingSeatsModule,
    AccountingValidityModule,
    AddressesModule,
    AnnualClosingModule,
    AuthModule,
    CategoriesCupsModule,
    CompaniesModule,
    ContactTypeModule,
    CostCenterModule,
    CountriesModule,
    DepartmentsModule,
    DetailsAccountingSeatModule,
    DetailCopaysAndFeesModule,
    GeneralAccounting,
    GroundsDenialModule,
    GroupsCupsModule,
    HealthAdministratorsModule,
    MonthlyClosureModule,
    MonthlyOpeningModule,
    MunicipalitiesModule,
    NeighborhoodsModule,
    OccupationsModule,
    ProfilesModule,
    ProfilesPermissionsModule,
    RegisterStatusModule,
    RequirementsListsDetailsModule,
    RequirementsListsModule,
    RetentionConceptsModule,
    SisbenLevelsModule,
    SocialsModule,
    SpecialPopulationModule,
    SubcategoriesCupsModule,
    SubgroupsCupsModule,
    ThirdPartyAccountantsModule,
    ThirdPersonModule,
    TypesSeatsModule,
    UsersModule,
    ValidityModule,
    CareservicesModule,
    DetailnumerationdiansModule,
    NumerationdiansModule,
    BedsModule,
    FeesModule,
    FloorsModule,
    LocationsModule,
    HolidayssModule,
    HeadquarterssModule,
    HealthproviderssModule,
    ChargesModule,
    GroundsdenialcaresModule,
    SisbenlevelsModule,
    SpecialpopulationsModule,
    PermissionssModule,
    ConsecutivecontrolvaliditiessModule,
    CategoriescupssModule,
    EntitytemplatesModule,
    ParameterizationcupssModule,
    SubcatcupssModule,
    SubgruposcupssModule,
    AcccongensModule,
    AccountingtermssModule,
    AcccostcenterssModule,
    AccbalmovsModule,
    HcdignosessModule,
    HcspecialtiessModule,
    HchealthprosModule,
    GooparsModule,
    GooconfsModule,
    GooclasModule,
    CxcaccrecsModule,
    CxccouconsModule,
    CxpproviderssModule,
    CxpcouconsModule,
    AppreacansModule,
    AppofficessModule,
    InvaccparsModule,
    InvunitsmeasModule, 
    InvmanufrolessModule,
    InvcumsModule,
    InvpharforsModule,
    AccentsubdetsModule,
    AccinicialrunsModule,
    AccountingentriesdetsModule,
    Accountingentries
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
