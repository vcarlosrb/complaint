import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule } from '@angular/material';
// Modules app
import { ComplaintModule } from '../complaint/complaint.module';

// Routing
import { PublicRoutingModule }  from './routing/public-routing.module';

// Views
import { LayoutView } from './views/layout.view';
import { HomeView } from './views/HomeView/home.view';
import { AboutView } from './views/AboutView/about.view';

// Components
import { HeaderComponent } from './components/HeaderComponent/header.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { RegisterComponent } from './components/RegisterComponent/register.component';

@NgModule({
  declarations: [
    LayoutView,
    HomeView,
    AboutView,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    PublicRoutingModule,
    ComplaintModule
  ],
  providers: [],
  bootstrap: [LayoutView]
})
export class PublicModule { }
