import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDashboardComponent } from './components/dashboard/details-dashboard/details-dashboard.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { UsersDashboardComponent } from './components/dashboard/users-dashboard/users-dashboard.component';
import { AfterauthGuard } from './guards/afterauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { CreateaAccountComponent } from './pages/createa-account/createa-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:"login", component:LoginComponent, canActivate:[AfterauthGuard]},
  { path:"singout", component:CreateaAccountComponent, canActivate:[AfterauthGuard]},
  { path:"", component:HomeComponent},
  {
    path:"dashboard",
    children:[
      { path:"", component:HomeDashboardComponent},
      { path:"users", component:UsersDashboardComponent},
      { path:"users?p=0", component:UsersDashboardComponent},

      { path:"details/:id", component:DetailsDashboardComponent},
    ],
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  { path:"**", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
