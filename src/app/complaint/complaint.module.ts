import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComplaintRoutingModule }  from './routing/complaint-routing.module';

// Views
import { LayoutView } from './views/layout.view';
import { ComplaintsView } from './views/ComplaintsView/complaints.view';

@NgModule({
  declarations: [
    LayoutView,
    ComplaintsView
  ],
  imports: [
    BrowserModule,
    ComplaintRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutView]
})
export class ComplaintModule { }
