import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VpnDataComponent } from './vpn/vpn-data/vpn-data.component';
import { BadgeDataComponent } from './badge/badge-data/badge-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeamDataComponent } from './team/team-data/team-data.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrendsDataComponent } from './trends/trends-data/trends-data.component';
import { SafteyFormComponent } from './saftey-form/saftey-form.component';



const routes: Routes = [

  {path:'login',  component: LoginComponent},
  { path: 'register', component: SignUpComponent },
  { path: 'safty', component: SafteyFormComponent},
  { path: 'Home', component: DashboardComponent, 
children:[
  {path:'profile',  component: UserProfileComponent},
  { path: 'Vpn/vpndata', component: VpnDataComponent},
  { path: 'Badge/badgedata', component: BadgeDataComponent},
  { path: 'teamData', component: TeamDataComponent},
  { path: 'laptop', component: LaptopComponent}, 
  { path: 'trends', component: TrendsDataComponent},
   
 
]},
  {path:'',  redirectTo: '/login', pathMatch:'full'},
   { path: '**', component: NotFoundComponent }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);