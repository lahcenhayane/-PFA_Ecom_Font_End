import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateaAccountComponent } from './pages/createa-account/createa-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { NavbarDashboardComponent } from './components/dashboard/navbar-dashboard/navbar-dashboard.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { JwtInterceptor } from './jwt.interceptor';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { UsersDashboardComponent } from './components/dashboard/users-dashboard/users-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreateaAccountComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarDashboardComponent,
    HomeDashboardComponent,
    HeaderComponent,
    UsersDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
