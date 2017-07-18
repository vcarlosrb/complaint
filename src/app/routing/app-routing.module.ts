import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../services/AuthService/auth-guard.service';
import { CurrentUserResolve, UserIdResolve, CurrentCompanyResolve } from '../services/ResolveService/resolve.service';

import { PrivateView } from '../views/PrivateView/private.view';
import { HomeView } from '../views/HomeView/home.view';
import { AboutView } from '../views/AboutView/about.view';
import { ComplaintsView } from '../views/ComplaintsView/complaints.view';
import { ProfileView } from '../views/ProfileView/profile.view';
import { CompanyView } from '../views/CompanyView/company.view';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: HomeView },
  { path: 'about', component: AboutView },
  {
    path: '', component: PrivateView, canActivate: [AuthGuardService], children: [
      { path: '', component: ComplaintsView },
      {
        path: 'profile', component: ProfileView, resolve: {
          CurrentUser: CurrentUserResolve
        }
      },
      {
        path: 'user/:user', component: ProfileView, resolve: {
          CurrentUser: UserIdResolve
        }
      },
      {
        path: 'company/:company', component: CompanyView, resolve: {
          CurrentCompany: CurrentCompanyResolve
        }
      }
    ], resolve: {
      UserData: CurrentUserResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CurrentUserResolve, UserIdResolve, CurrentCompanyResolve]
})
export class AppRoutingModule { }
