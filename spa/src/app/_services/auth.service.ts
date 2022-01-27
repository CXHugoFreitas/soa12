import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  Hospital = new BehaviorSubject<string>('0');
  currentHospital = this.Hospital.asObservable();

  ltk = new BehaviorSubject<boolean>(null);
  currentLTK = this.ltk.asObservable();

  selectedProcedureId = new BehaviorSubject<string>('0');
  currentProcedureId = this.selectedProcedureId.asObservable();

  soortProcedure = new BehaviorSubject<string>('0');
  currentSoortProcedure = this.soortProcedure.asObservable();

  Aio = new BehaviorSubject<string>('0');
  currentAio = this.Aio.asObservable();

  Role = new BehaviorSubject<string>('0');
  currentRole = this.Role.asObservable();

  dst = new BehaviorSubject<string>('0');
  currentDst = this.dst.asObservable();

  constructor(private http: HttpClient) {}


  changeCurrentHospital(sh: string) { this.Hospital.next(sh); }
  changeCurrentProcedure(sh: string) { this.selectedProcedureId.next(sh); }
  changeSoortOperatie(sh: string) { this.soortProcedure.next(sh); }
  changeCurrentAio(sh: string) { this.Aio.next(sh); }
  changeCurrentRole(sh: string) { this.Role.next(sh); }
  
  changeDst(sh: string) { this.dst.next(sh); }
  changeLtk(sh: boolean) { this.ltk.next(sh); }


  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
        }
      })
    );
  }

register(model: any) {return this.http.post(this.baseUrl + 'account/register', model); }

loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
}

logOut(){
  localStorage.removeItem('token');
}

updatePassword(model: any) { return this.http.put<boolean>(this.baseUrl + 'account/changePassword/' + model.password, model); }



}
