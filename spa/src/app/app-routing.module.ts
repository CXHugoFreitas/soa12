import { changesPreViewReport } from './_guards/changes-previewReport.guard';
import { PreviewReportComponent } from './procedures/operative-report/preview-report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './users/userProfile/userProfile.component';
import { ProfileResolver } from './_resolvers/profile.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ProcedureListResolver } from './_resolvers/procedure-list.resolver';
import { ProcedureMainComponent } from './procedures/procedure-main/procedure-main.component';
import { ProcedureDetailsComponent } from './procedures/procedure-details/procedure-details.component';
import { ProcedureDetailsResolver } from './_resolvers/procedure-details.resolver';
import { ChangesProcedureDetails } from './_guards/changes-procedureDetails.guard';
import { EditUserDetailsComponent } from './users/edit_user_details/edit_user_details.component';
import { DetailsMainComponent } from './procedures/details-main/details-main.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AddProcedureComponent } from './procedures/add-procedure/addProcedure.component';
import { EuroScoreDetailsComponent } from './procedures/euroscore/euroscore.component';
import { EuroScoreDetailsResolver } from './_resolvers/euroScoreDetails.resolver';
import { changesEuroscoreDetails } from './_guards/changes-euroscoreDetails.guard';
import { CpbComponent } from './procedures/cpb/cpb.component';
import { CPBDetailsResolver } from './_resolvers/CPB-details.resolver';
import { changesCPBDetails } from './_guards/changes-cpbDetails.guard';
import { CabgComponent } from './procedures/Cabg/cabg.component';
import { changesCABGDetails } from './_guards/changes-cabgDetails.guard';
import { CabgResolver } from './_resolvers/CABG-details.resolver';
import { PostOpComponent } from './procedures/postoperative/post-op.component';
import { PostResolver } from './_resolvers/PostOp-details.resolver';
import { changesPOSTOPDetails } from './_guards/changes-postopDetails.guard';
import { PreviewReportResolver } from './_resolvers/PreviewReport.resolver';
import { ValveComponent } from './procedures/valve/valve.component';
import { ValveResolver } from './_resolvers/Valve.resolver';
import { changesValveDetails } from './_guards/changes-valveDetails.guard';
import { ValveRepairComponent } from './procedures/ValveRepair/valve-repair.component';
import { ValveRepairResolver } from './_resolvers/ValveRepair.resolver';
import { changesValveRepairDetails } from './_guards/changes-valveRepair.guard';
import { DischargeComponent } from './discharge/discharge.component';
import { dischargeDetailsResolver } from './_resolvers/discharge.resolver';
import { MininvComponent } from './procedures/mininv/mininv.component';
import { MinInvResolver } from './_resolvers/MinInv.resolver';
import { changesMinInv } from './_guards/changes-minInvDetails.guard';
import { EditHospitalComponent } from './configuration/hospital/edit-hospital.component';
import { HospitalResolver } from './_resolvers/Hospital.resolver';
import { changesHospital } from './_guards/changes-Hospital.guard copy';
import { EditEmployeeComponent } from './configuration/employees/edit-employee.component';
import { EditRefPhysComponent } from './configuration/refPhys/edit-ref-phys.component';
import { OpreportComponent } from './configuration/opreport/opreport.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserDetailsResolver } from './_resolvers/user-details.resolver';
import { LtxComponent } from './procedures/Ltx/Ltx.component';
import { LtxResolver } from './_resolvers/Ltx.resolver';
import { changesLtxDetails } from './_guards/changes-ltxDetails.guard';
import { changesAorticDetails } from './_guards/changes-aorticDetails.guard';
import { AorticSurgeryResolver } from './_resolvers/aorticSurgery.resolver';
import { AorticComponent } from './procedures/Aortic/Aortic.component';
import { changesDischarge } from './_guards/changes-Discharge.guard';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalListResolver } from './_resolvers/hospitalList.resolver';
import { AiosListComponent } from './users/aios/aios-list/aios-list.component';
import { AiosListResolver } from './_resolvers/aios-list.resolver';
import { AioProceduresComponent } from './users/aios/aioProcedures/aioProcedures.component';
import { AioCoursesComponent } from './users/aios/aioCourses/aioCourses.component';
import { AioProcedureResolver } from './_resolvers/aioProcedure.resolver';
import { AioCourseResolver } from './_resolvers/aioCourse.resolver';
import { AioEpaComponent } from './users/aios/aioEpa/aioEpa.component';
import { AioEpaResolver } from './_resolvers/aioEpa.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'procedureDetails',
    component: ProcedureDetailsComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'detailsMain/:id', outlet: 'details', component: DetailsMainComponent,
        resolve: { procedureDetails: ProcedureDetailsResolver },
        canDeactivate: [ChangesProcedureDetails]
      },
      {
        path: 'euroscore/:id', outlet: 'details', component: EuroScoreDetailsComponent,
        resolve: { patient: EuroScoreDetailsResolver },
        canDeactivate: [changesEuroscoreDetails]
      },
      {
        path: 'cpb/:id', outlet: 'details', component: CpbComponent,
        resolve: { cpb: CPBDetailsResolver },
        canDeactivate: [changesCPBDetails]
      },
      {
        path: 'cabg/:id', outlet: 'details', component: CabgComponent,
        resolve: { cabg: CabgResolver },
        canDeactivate: [changesCABGDetails]
      },
      {
        path: 'ltx/:id', outlet: 'details', component: LtxComponent,
        resolve: { ltx: LtxResolver },
        canDeactivate: [changesLtxDetails]
      },
      {
        path: 'aortic/:id', outlet: 'details', component: AorticComponent,
        resolve: { aortic: AorticSurgeryResolver },
        canDeactivate: [changesAorticDetails]
      },
      {
        path: 'valve/:id', outlet: 'details', component: ValveComponent,
        resolve: { valve: ValveResolver },
        canDeactivate: [changesValveDetails]

      },
      {
        path: 'valverepair/:id', outlet: 'details', component: ValveRepairComponent,
        resolve: { valve: ValveRepairResolver },
        canDeactivate: [changesValveRepairDetails]
      },
      {
        path: 'postop/:id', outlet: 'details', component: PostOpComponent,
        resolve: { postop: PostResolver },
        canDeactivate: [changesPOSTOPDetails]
      },
      {
        path: 'mininv/:id', outlet: 'details', component: MininvComponent,
        resolve: { min: MinInvResolver },
        canDeactivate: [changesMinInv]
      },
      {
        path: 'previewReport/:id', outlet: 'details', component: PreviewReportComponent,
        resolve: { preView: PreviewReportResolver },
        canDeactivate: [changesPreViewReport]
      },
    ]
  },




  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [

     
      { path: 'profile', component: UserProfileComponent, resolve: { user: ProfileResolver } },
      { path: 'discharge/:id', component: DischargeComponent,resolve: { dis: dischargeDetailsResolver }, canDeactivate: [changesDischarge] },
      { path: 'procedures', component: ProcedureMainComponent, resolve: { procedure: ProcedureListResolver } },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'editRefPhys', component: EditRefPhysComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'editEmployee', component: EditEmployeeComponent },
      { path: 'editReport', component: OpreportComponent },
      { path: 'editHospital/:id', component: EditHospitalComponent, resolve: { hos: HospitalResolver },canDeactivate: [changesHospital]},
      { path: 'userList', component: UserListComponent, resolve: { userList: UserListResolver } },
      { path: 'aioProcedures/:id', component: AioProceduresComponent, resolve: { aiosList: AioProcedureResolver } },
      { path: 'aioCourses/:id', component: AioCoursesComponent, resolve: { aiosListCourse: AioCourseResolver } },
      { path: 'aioEpas/:id', component: AioEpaComponent, resolve: { aiosListEpa: AioEpaResolver } },
      { path: 'aiosList', component: AiosListComponent, resolve: { aiosList: AiosListResolver } },
      { path: 'hospitalList', component: HospitalsComponent, resolve: { hospitalList: HospitalListResolver }},
      { path: 'userDetails/:id', component: EditUserDetailsComponent, resolve: {user: UserDetailsResolver} },
      { path: 'addProcedure', component: AddProcedureComponent },
      { path: 'statistics', component: StatisticsComponent }

    ]
  },

  /*  {path: 'detailsMain', outlet: 'details', component: DetailsMainComponent,
          // resolve: { procedureDetails: ProcedureDetailsResolver },
          // canDeactivate: [ChangesProcedureDetails]
          }, */



  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
