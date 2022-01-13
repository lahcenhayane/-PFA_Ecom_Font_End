import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDashboardComponent } from './components/dashboard/group-dashboard/group-dashboard.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { AfterauthGuard } from './guards/afterauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { CreateaAccountComponent } from './pages/createa-account/createa-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:"login", component:LoginComponent},
  { path:"singout", component:CreateaAccountComponent},
  { path:"", component:HomeComponent},
  {
    path:"dashboard",
    children:[
      { path:"", component:HomeDashboardComponent},
      // { path:"membre", component:UserDashboardComponent},
      { path:"group", component:GroupDashboardComponent},
    ],
    component:DashboardComponent
  },
  { path:"**", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
