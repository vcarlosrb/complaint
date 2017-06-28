import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule } from '@angular/material';

import { ComplaintRoutingModule }  from './routing/complaint-routing.module';

// Views
import { LayoutView } from './views/layout.view';
import { ComplaintsView } from './views/ComplaintsView/complaints.view';

// Components
import { UserComponent } from './components/UserComponent/user.component';
import { CompaniesComponent } from './components/CompaniesComponent/companies.component';
import { CompanyItemComponent } from './components/CompanyItemComponent/company-item.component';
import { PublishComponent } from './components/PublishComponent/publish.component';
import { PublishItemComponent } from './components/PublishItemComponent/publish-item.component';

@NgModule({
  declarations: [
    LayoutView,
    ComplaintsView,
    UserComponent,
    CompaniesComponent,
    CompanyItemComponent,
    PublishComponent,
    PublishItemComponent
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
