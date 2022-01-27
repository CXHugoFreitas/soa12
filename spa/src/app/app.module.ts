import { changesValveDetails } from './_guards/changes-valveDetails.guard';
import { changesPreViewReport } from './_guards/changes-previewReport.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, DatePipe} from '@angular/common';
import { NgModule } from '@angular/core';
import {FileUploadModule} from 'ng2-file-upload';
import {ChartsModule} from 'ng2-charts'
import {GoogleChartsModule} from 'angular-google-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiSwitchModule} from 'ngx-toggle-switch';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './_guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ValveService } from './_services/valve.service';
import { GraphService } from './_services/graph.service';
import { LoginComponent } from './login/login.component';
import { MyLineChartComponent } from './_charts/my-line-chart/my-line-chart.component';
import { PwpChartComponent } from './_charts/pwp-chart/pwp-chart.component';
import { PapChartComponent } from './_charts/pap-chart/pap-chart.component';
import { TempChartComponent } from './_charts/temp-chart/temp-chart.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoEditorComponent } from './PhotoEditor/PhotoEditor.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserProfileComponent } from './users/userProfile/userProfile.component';
import { EditUserDetailsComponent } from './users/edit_user_details/edit_user_details.component';
import { UserCardComponent } from './users/userCard/userCard.component';
import { WorkedInComponent } from './users/worked-in/worked-in.component';
import { PreViewReportService } from './_services/pre-view-report.service';
import { FinalReportService } from './_services/final-report.service';
import { PostOpService } from './_services/postop.service';
import { CABGService } from './_services/cabg.service';
import { PatientService } from './_services/patient.service';
import { CourseService } from './_services/course.service';
import { RefPhysService } from './_services/ref-phys.service';
import { EmployeeService } from './_services/employee.service';
import { AorticSurgeryService } from './_services/aorticsurgery.service';
import { MinInvService } from './_services/mininv.service';
import { DischargeService } from './_services/discharge.service';
import { ProcedureListResolver } from './_resolvers/procedure-list.resolver';
import { ProcedureDetailsResolver } from './_resolvers/procedure-details.resolver';
import { EuroScoreDetailsResolver } from './_resolvers/euroScoreDetails.resolver';
import { CPBDetailsResolver } from './_resolvers/CPB-details.resolver';
import { AorticSurgeryResolver } from './_resolvers/aorticSurgery.resolver';
import { CabgResolver } from './_resolvers/CABG-details.resolver';
import { HospitalResolver } from './_resolvers/Hospital.resolver';
import { PreviewCABGResolver } from './_resolvers/PreviewCABG.resolver';
import { ValveRepairResolver } from './_resolvers/ValveRepair.resolver';
import { PostResolver } from './_resolvers/PostOp-details.resolver';
import { PreviewReportResolver } from './_resolvers/PreviewReport.resolver';
import { UserDetailsResolver } from './_resolvers/user-details.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { ProfileResolver } from './_resolvers/profile.resolver';
import { PodCastResolver } from './_resolvers/podcast.resolver';
import { PDFResolver } from './_resolvers/pdf.resolver';
import { RefPyhsResolver } from './_resolvers/refPhys.resolver';
import { MinInvResolver } from './_resolvers/MinInv.resolver';
import { dischargeDetailsResolver } from './_resolvers/discharge.resolver';
import { ValveResolver } from './_resolvers/Valve.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ProcedureMainComponent } from './procedures/procedure-main/procedure-main.component';
import { changesEuroscoreDetails } from './_guards/changes-euroscoreDetails.guard';
import { ProcedureDetailsComponent } from './procedures/procedure-details/procedure-details.component';

/*
import { changesAorticSurgery } from './_guards/changes-aorticSurgery.guard';
import { changesProcedureDetails } from './_guards/changes-procedureDetails.guard';
import { changesValveDetails } from './_guards/changes-valve.guard';
import { changes_valveRepair } from './_guards/changes-valveRepair.guard';



import { changes_discharge } from './_guards/changes-discharge.guard';
import { changesMinInv } from './_guards/changes-mininv.guard'; */



import { changesCPBDetails } from './_guards/changes-cpbDetails.guard';
import { changesCABGDetails } from './_guards/changes-cabgDetails.guard';
import { DetailsMainComponent } from './procedures/details-main/details-main.component';
import { ChangesProcedureDetails } from './_guards/changes-procedureDetails.guard';
import { CpbComponent } from './procedures/cpb/cpb.component';
import { ValveComponent } from './procedures/valve/valve.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AddEuroScoreDetailsComponent } from './procedures/addEuroScoreDetails/addEuroScoreDetails.component';
import { SelectProcedureTypeComponent } from './procedures/selectProcedureType/selectProcedureType.component';
import { AddProcedureComponent } from './procedures/add-procedure/addProcedure.component';
import { EuroScoreDetailsComponent } from './procedures/euroscore/euroscore.component';
import { CabgComponent } from './procedures/Cabg/cabg.component';
import { PostOpComponent } from './procedures/postoperative/post-op.component';
import { changesPOSTOPDetails } from './_guards/changes-postopDetails.guard';
import { PreviewReportComponent } from './procedures/operative-report/preview-report.component';
import { ValveRepairComponent } from './procedures/ValveRepair/valve-repair.component';
import { changesValveRepairDetails } from './_guards/changes-valveRepair.guard';
import { ReportHeaderComponent } from './procedures/operative-report/reportHeader/report-header.component';
import { Blok1Component } from './procedures/operative-report/blok1/blok1.component';
import { Blok2Component } from './procedures/operative-report/blok2/blok2.component';
import { Blok6Component } from './procedures/operative-report/blok6/blok6.component';
import { BlokCabgComponent } from './procedures/operative-report/blokcabg/blok-cabg.component';
import { BlokvalveComponent } from './procedures/operative-report/blokvalve/blokvalve.component';
import { DischargeComponent } from './discharge/discharge.component';
import { CasemixComponent } from './statistics/CaseMix/casemix.component';
import { BandComponent } from './statistics/FiveRiskBands/band.component';
import { PerMonthComponent } from './statistics/PerMonth/per-month.component';
import { PerYearComponent } from './statistics/PerYear/per-year.component';
import { AgeGraphComponent } from './statistics/Age/age_graph.component';
import { VladGraphComponent } from './statistics/VLAD/vlad_graph.component';
import { MininvComponent } from './procedures/mininv/mininv.component';
import { changesMinInv } from './_guards/changes-minInvDetails.guard';
import { EditRefPhysComponent } from './configuration/refPhys/edit-ref-phys.component';
import { OpreportComponent } from './configuration/opreport/opreport.component';
import { EditHospitalComponent } from './configuration/hospital/edit-hospital.component';
import { EecComponent } from './configuration/employees/edit/eec.component';
import { EmpeditdetaileComponent } from './configuration/employees/editDetails/empeditdetaile.component';
import { EmployeePhotoUploaderComponent } from './configuration/employees/upload-photo/employee-photo-uploader.component';
import { EditEmployeeComponent } from './configuration/employees/edit-employee.component';
import { changesHospital } from './_guards/changes-Hospital.guard copy';
import { TimeagoModule } from 'ngx-timeago';
import { LtxComponent } from './procedures/Ltx/Ltx.component';
import { LtxResolver } from './_resolvers/Ltx.resolver';
import { changesLtxDetails } from './_guards/changes-ltxDetails.guard';
import { AorticComponent } from './procedures/Aortic/Aortic.component';
import { changesAorticDetails } from './_guards/changes-aorticDetails.guard';
import { changesDischarge } from './_guards/changes-Discharge.guard';
import { Blok3Component } from './procedures/operative-report/blok3/blok3.component';
import { ChangePwdComponent } from './login/changePwd/changePwd.component';
import { EmailRefPysComponent } from './procedures/operative-report/emailRefPys/emailRefPys.component';
import { OviValveComponent } from './procedures/valve/valvesInOVI/oviValve/oviValve.component';
import { ValveDetailsComponent } from './procedures/valve/valveDetails/valveDetails.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalListResolver } from './_resolvers/hospitalList.resolver';
import { HospitalCardComponent } from './hospitals/hospitalCard/hospitalCard.component';
import { HospitalDetailsComponent } from './hospitals/hospitalDetails/hospitalDetails.component';
import { ValveRepairDetailsComponent } from './procedures/ValveRepair/valveRepairDetails/valveRepairDetails.component';
import { GameCardComponent } from './procedures/Aortic/game-card/game-card.component';
import { ExistingConduitComponent } from './procedures/Aortic/existingConduit/existingConduit.component';
import { AiosListComponent } from './users/aios/aios-list/aios-list.component';
import { AiosListResolver } from './_resolvers/aios-list.resolver';
import { AioCardComponent } from './users/aios/aioCard/aioCard.component';
import { AioProceduresComponent } from './users/aios/aioProcedures/aioProcedures.component';
import { AioCoursesComponent } from './users/aios/aioCourses/aioCourses.component';
import { AioProcedureResolver } from './_resolvers/aioProcedure.resolver';
import { AioCourseResolver } from './_resolvers/aioCourse.resolver';
import { HospitalRefPhysComponent } from './hospitals/hospitalDetails/hospitalRefPhys/hospitalRefPhys.component';
import { HospitalEmployeesComponent } from './hospitals/hospitalDetails/hospitalEmployees/hospitalEmployees.component';
import { HospitalGeneralComponent } from './hospitals/hospitalDetails/hospitalGeneral/hospitalGeneral.component';
import { AddHospitalDetailsComponent } from './hospitals/addHospitalDetails/addHospitalDetails.component';
import { AioEpaComponent } from './users/aios/aioEpa/aioEpa.component';
import { AioEpaResolver } from './_resolvers/aioEpa.resolver';
import { AioCourseDetailsComponent } from './users/aios/aioCourseDetails/aioCourseDetails.component';
import { AioCourseCardComponent } from './users/aios/aioCourseCard/aioCourseCard.component';
import { AioEpaCardComponent } from './users/aios/aioEpaCard/aioEpaCard.component';
import { AioEpaDetailsComponent } from './users/aios/aioEpaDetails/aioEpaDetails.component';
import { CareerComponent } from './users/career/career.component';



export function tokenGet() { return localStorage.getItem('token'); }

@NgModule({
   declarations: [	
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavMenuComponent,
      LoginComponent,
      ChangePwdComponent,
      MyLineChartComponent,
      PwpChartComponent,
      PapChartComponent,
      TempChartComponent,
      ContactComponent,
      EditUserDetailsComponent,
      PhotoEditorComponent,
      UserListComponent,
      UserCardComponent,
      UserProfileComponent,
      WorkedInComponent,
      ProcedureMainComponent,
      ProcedureDetailsComponent,
      DetailsMainComponent,
      EuroScoreDetailsComponent,
      CpbComponent,
      CabgComponent,
      PostOpComponent,
      ValveComponent,
      ValveRepairComponent,
      StatisticsComponent,
      ConfigurationComponent,
      AddProcedureComponent,
      SelectProcedureTypeComponent,
      AddEuroScoreDetailsComponent,
      PreviewReportComponent,
      ReportHeaderComponent,
      Blok1Component,
      Blok2Component,
      Blok3Component,
      Blok6Component,
      BlokCabgComponent,
      BlokvalveComponent,
      DischargeComponent,
      AgeGraphComponent,
      CasemixComponent,
      BandComponent,
      PerMonthComponent,
      PerYearComponent,
      VladGraphComponent,
      MininvComponent,
      ConfigurationComponent,
      EditRefPhysComponent,
      OpreportComponent,
      EditHospitalComponent,
      EecComponent,
      EmpeditdetaileComponent,
      EmployeePhotoUploaderComponent,
      EditEmployeeComponent,
      LtxComponent,
      AorticComponent,
      EmailRefPysComponent,
      OviValveComponent,
      ValveDetailsComponent,
      HospitalsComponent,
      HospitalCardComponent,
      HospitalDetailsComponent,
      ValveRepairComponent,
      ValveRepairDetailsComponent,
      GameCardComponent,
      ExistingConduitComponent,
      AiosListComponent,
      AioCardComponent,
      AioProceduresComponent,
      AioCoursesComponent,
      AioCourseDetailsComponent,
      AioCourseCardComponent,
      HospitalRefPhysComponent,
      HospitalEmployeesComponent,
      HospitalGeneralComponent,
      AddHospitalDetailsComponent,
      AioEpaComponent,
      AioEpaCardComponent,
      AioEpaDetailsComponent,
      CareerComponent
   ],
   imports: [
      CommonModule,
      UiSwitchModule,
      HttpClientModule,
      FileUploadModule,
      TimeagoModule.forRoot(),
      BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      ButtonsModule.forRoot(),
      TabsModule.forRoot(),
      PaginationModule,
      BrowserModule,
      ChartsModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      GoogleChartsModule,
      PaginationModule.forRoot(),
      BsDatepickerModule.forRoot(),
      JwtModule.forRoot({
         config: {
             tokenGetter: tokenGet,
             whitelistedDomains: ['localhost:5000', '77.173.53.32:8045'],
             blacklistedRoutes: ['localhost:5000/api/auth']
         }
     }),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      PreViewReportService,
      FinalReportService,
      PostOpService,
      CABGService,
      GraphService,
      PatientService,
      CourseService,
      PreViewReportService,
      RefPhysService,
      EmployeeService,
      AorticSurgeryService,
      MinInvService,
      ValveService,
      DischargeService,
      DatePipe,
      AuthGuard,
      ProcedureListResolver,
      ProcedureDetailsResolver,
      EuroScoreDetailsResolver,
      CPBDetailsResolver,
      AorticSurgeryResolver,
      CabgResolver,
      HospitalResolver,
      PreviewCABGResolver,
      ValveResolver,
      ValveRepairResolver,
      PostResolver,
      PreviewReportResolver,
      UserDetailsResolver,
      UserListResolver,
      AiosListResolver,
      AioProcedureResolver,
      AioCourseResolver,
      AioEpaResolver,
      HospitalListResolver,
      ProfileResolver,
      PodCastResolver,
      PDFResolver,
      RefPyhsResolver,
      MinInvResolver,
      dischargeDetailsResolver,
      LtxResolver,
      PreventUnsavedChanges,
      ChangesProcedureDetails,
      changesEuroscoreDetails,
      changesCPBDetails,
      changesCABGDetails,
      changesPOSTOPDetails,
      changesPreViewReport,
      changesValveDetails,
      changesValveRepairDetails,
      changesMinInv,
      changesHospital,
      changesLtxDetails,
      changesAorticDetails,
      changesDischarge
     /*  changesEuroscoreDetails,
      changesAorticSurgery,
      changesProcedureDetails,

      changesCPBDetails,

      ChangesPostOpDetails,
      changes_discharge,
       */
        ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
