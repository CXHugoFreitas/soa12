import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { AuthService } from './auth.service';
import { dropItem } from '../_models/dropItem';
import { environment } from '../../environments/environment';
import { Hospital } from '../_models/Hospital';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

baseUrl = environment.apiUrl;
constructor(private http: HttpClient,
            private alertify: AlertifyService,
            private auth: AuthService) { }


getSpecificHospital(id:number) { return this.http.get<Hospital>(this.baseUrl + 'hospital/'+ id); }
saveHospital(item: Hospital) { return this.http.put<Hospital>(this.baseUrl + 'hospital', item); }
IsThisHospitalUsingOVI(id:number){return this.http.get<boolean>(this.baseUrl + 'hospital/IsThisHospitalImplementingOVI/' + id)}
getListOfCities(id: number){ return this.http.get<dropItem[]>(this.baseUrl + 'citiesPerCountry/' + id);}
getAllThisUserWorkedInHospitals(userId: number) { return this.http.get<Hospital[]>(this.baseUrl + 'hospital_worked_in/' + userId);}

allHospitals(): Observable<Hospital[]>{return this.http.get<Hospital[]>(this.baseUrl + 'Hospital/allFullHospitals');}
getHospitalsInCountry(id: number): Observable<Hospital[]>{return this.http.get<Hospital[]>(this.baseUrl + 'Hospital/allFullHospitalsPerCountry/' + id);}

addHospital(id: number, no: number){return this.http.post<Hospital>(this.baseUrl + 'hospital/'+ id + '/' + no, null);}
deleteHospital(id: string){return this.http.delete<number>(this.baseUrl + 'hospital/'+ id);}
}
