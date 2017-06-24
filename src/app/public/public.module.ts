import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { PublicRoutingModule }  from './routing/public-routing.module';

// Views
import { LayoutView } from './views/layout.view';
import { HomeView } from './views/HomeView/home.view';
import { AboutView } from './views/AboutView/about.view';

// Components
import { HeaderComponent } from './components/HeaderComponent/header.component';
import { FooterComponent } from './components/FooterComponent/footer.component';

@NgModule({
  declarations: [
    LayoutView,
    HomeView,
    AboutView,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PublicRoutingModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [LayoutView]
})
export class PublicModule { }
