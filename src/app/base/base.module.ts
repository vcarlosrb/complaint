import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { ComplaintModule } from '../complaint/complaint.module';

// Views
import { LayoutView } from './views/layout.view';


@NgModule({
  declarations: [
    LayoutView
  ],
  imports: [
    BrowserModule,
    PublicModule,
    ComplaintModule
  ],
  providers: [],
  bootstrap: [LayoutView]
})
export class BaseModule { }
