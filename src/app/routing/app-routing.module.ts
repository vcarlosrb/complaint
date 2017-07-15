import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../services/AuthService/auth-guard.service';
import { CurrentUserResolve } from '../services/ResolveService/resolve.service';

import { PrivateView } from '../views/PrivateView/private.view';
import { HomeView } from '../views/HomeView/home.view';
import { AboutView } from '../views/AboutView/about.view';
import { ComplaintsView } from '../views/ComplaintsView/complaints.view';
import { ProfileView } from '../views/ProfileView/profile.view';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: HomeView },
  { path: 'about', component: AboutView },
  {
    path: '', component: PrivateView, canActivate: [AuthGuardService], children: [
      { path: '', component: ComplaintsView },
      { path: 'profile', component: ProfileView }
    ], resolve: {
      UserData: CurrentUserResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CurrentUserResolve]
})
export class AppRoutingModule { }
