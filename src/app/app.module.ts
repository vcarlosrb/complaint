import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { FilterCompanyPipe } from './common/filter-company.pipe';

// Services
import { AuthGuardService } from './services/AuthService/auth-guard.service';
import { UserService } from './services/UserService/user.service';
import { CurrentUserResolve } from './services/ResolveService/resolve.service';
import { CompanyService } from './services/CompanyService/company.service';

// Routing
import { AppRoutingModule } from './routing/app-routing.module';

// Views
import { LayoutView } from './views/layout.view';
import { PrivateView } from './views/PrivateView/private.view';
import { HomeView } from './views/HomeView/home.view';
import { AboutView } from './views/AboutView/about.view';
import { ComplaintsView } from './views/ComplaintsView/complaints.view';
import { ProfileView } from './views/ProfileView/profile.view';
import { CompanyView } from './views/CompanyView/company.view';

// Components
import { HeaderComponent } from './components/HeaderComponent/header.component';
import { HeaderPrivateComponent } from './components/HeaderPrivateComponent/header-private.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { RegisterComponent } from './components/RegisterComponent/register.component';
import { CompaniesComponent } from './components/CompaniesComponent/companies.component';
import { CompanyItemComponent } from './components/CompanyItemComponent/company-item.component';
import { PublishComponent } from './components/PublishComponent/publish.component';
import { PublishItemComponent } from './components/PublishItemComponent/publish-item.component';
import { UserComponent } from './components/UserComponent/user.component';
import { PublishCompanyComponent } from './components/PublishCompanyComponent/publish-company.component';
import { CommentsComponent } from './components/CommentsComponent/comments.component';
import { CommentItemComponent } from './components/CommentItemComponent/comment-item.component';

@NgModule({
  declarations: [
    FilterCompanyPipe,
    LayoutView,
    PrivateView,
    HomeView,
    AboutView,
    ComplaintsView,
    ProfileView,
    CompanyView,
    HeaderComponent,
    HeaderPrivateComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CompaniesComponent,
    CompanyItemComponent,
    PublishComponent,
    PublishItemComponent,
    UserComponent,
    PublishCompanyComponent,
    CommentsComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MomentModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, UserService, CurrentUserResolve, CompanyService],
  bootstrap: [LayoutView]
})
export class AppModule { }
