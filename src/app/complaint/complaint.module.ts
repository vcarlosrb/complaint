import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule } from '@angular/material';

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
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    ComplaintRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutView]
})
export class ComplaintModule { }
