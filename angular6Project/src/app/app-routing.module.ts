import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TdfFormComponent } from './TDF/tdf-form/tdf-form.component';
import { ReactiveComponent } from './reactiveForms/reactive/reactive.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'	},
  {path: 'home', component: HomeComponent },
  {path: 'tdfForms', component: TdfFormComponent},
  {path: 'reactive', component: ReactiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
