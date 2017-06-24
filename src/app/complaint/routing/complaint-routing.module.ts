import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplaintsView }   from '../views/ComplaintsView/complaints.view';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'complaints',  component: ComplaintsView }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ComplaintRoutingModule {}
