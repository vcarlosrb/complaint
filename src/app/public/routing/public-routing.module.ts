import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeView }   from '../views/HomeView/home.view';
import { AboutView }   from '../views/AboutView/about.view';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',  component: HomeView },
  { path: 'about',  component: AboutView }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PublicRoutingModule {}
