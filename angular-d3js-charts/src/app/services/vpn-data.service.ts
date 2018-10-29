import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class VpnDataService {
  constructor(private http: Http) {this.http = http; }

  getVpnDataByHour (): Observable<any> {
    
    return this.http.get("./assets/data/vpn-data.json")
    .map(response => response.json());
}

  getVpnDataByDay (): Observable<any> {
    
    return this.http.get("./assets/data/vpn-data.json")
    .map(response => response.json());
}

getVpnDataByWeek (): Observable<any> {
    
  return this.http.get("./assets/data/vpn-data.json")
  .map(response => response.json());
}

userProfile () : Observable<any> {
    
  return this.http.get("./assets/data/vpn-data.json")
  .map(response => response.json());
}

getBadgeData() : Observable<any> {
    
  return this.http.get("./assets/data/9931492.json")
  .map(response => response.json());
}

getBadgeUserDayData() : Observable<any> {
    
  return this.http.get("./assets/data/badge-user-day.json")
  .map(response => response.json());
}

getManagesyData() : Observable<any> {
    
  return this.http.get("./assets/data/9931492.json")
  .map(response => response.json());
}

getLaptopData() : Observable<any> {
    
  return this.http.get("./assets/data/laptop.json")
  .map(response => response.json());
}

getTransData() : Observable<any> {
    
  return this.http.get("./assets/data/trans.json")
  .map(response => response.json());
}

getPieData (): Observable<any> {
  return this.http.get("./assets/data/apidata.json")
  .map(response => response.json());
}
 

getLineData (): Observable<any> {
  return this.http.get("./assets/data/apidata.json")
  .map(response => response.json());
}


 
}
