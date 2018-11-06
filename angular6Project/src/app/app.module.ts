import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfFormComponent } from './TDF/tdf-form/tdf-form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactiveForms/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfFormComponent,
    HomeComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
