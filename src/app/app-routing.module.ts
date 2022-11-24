import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSoftwareComponent } from './add-software/add-software.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { LoginGuardService } from './services/guards/login-guard.service';
import { SoftwareListComponent } from './software-list/software-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent,canActivate:[LoginGuardService]},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'software',
        component: SoftwareListComponent,
        outlet: 'child1',
      },
      {
        path:'add-software',
        component:AddSoftwareComponent,
        outlet:'child1',
      }
    ],
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
