import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { VpnDataComponent } from './vpn/vpn-data/vpn-data.component';
import { BadgeDataComponent } from './badge/badge-data/badge-data.component';
import { VpnWeekdayComponent } from './vpn/vpn-weekday/vpn-weekday.component';
import { VpnDataService } from './services/vpn-data.service';
import { HttpModule } from '@angular/http';
import { VpnHoursDataComponent } from './vpn/vpn-hours-data/vpn-hours-data.component';
import { VpnDayDataComponent } from './vpn/vpn-day-data/vpn-day-data.component';
import { BadgeDayDataComponent } from './badge/badge-day-data/badge-day-data.component';
import { BadgeHourDataComponent } from './badge/badge-hour-data/badge-hour-data.component';
import { BadgeWeekDataComponent } from './badge/badge-week-data/badge-week-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeamDataComponent } from './team/team-data/team-data.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeatMapComponent } from './heat-map/heat-map.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SampleNgxComponent } from './sample-ngx/sample-ngx.component';
import { TrendsDataComponent } from './trends/trends-data/trends-data.component';
import { MapsComponent } from './maps/maps.component';
import { PieChartsComponent } from './trends/pie-charts/pie-charts.component';
import { TrendsHeatMapComponent } from './trends/trends-heat-map/trends-heat-map.component';
import { LineChartComponent } from './trends/line-chart/line-chart.component';
import { HeatMapExampleComponent } from './vpn/heat-map-example/heat-map-example.component';
import { SafteyFormComponent } from './saftey-form/saftey-form.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    VpnDataComponent,
    BadgeDataComponent,
    VpnWeekdayComponent,
    VpnHoursDataComponent,
    VpnDayDataComponent,
    BadgeDayDataComponent,
    BadgeHourDataComponent,
    BadgeWeekDataComponent,
    UserProfileComponent,
    TeamDataComponent,
    LaptopComponent,
    NotFoundComponent,
    HeatMapComponent,
    SignUpComponent,
    SampleNgxComponent,
    TrendsDataComponent,
    MapsComponent,
    PieChartsComponent,
    TrendsHeatMapComponent,
    LineChartComponent,
    HeatMapExampleComponent,
    SafteyFormComponent
       
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    routing, FormsModule,HttpModule, RecaptchaModule, NgxChartsModule
  ],
  providers: [AuthenticationService, VpnDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
