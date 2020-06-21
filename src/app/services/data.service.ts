import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MsalUserService } from './msaluser.service';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private msalService: MsalUserService) {}

  getEmployees(): Observable<Employee[]> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.msalService.GetAccessToken(),
      }),
    };
    console.log(this.msalService.clientApplication.getAllUsers());

    return this.http.get(this.url, this.httpOptions).pipe((response: any) => {
      return response;
    });
  }

  getName() {
    console.log(this.msalService.clientApplication.getUser());
    return this.msalService.clientApplication.getUser().name;
  }
  getEmail() {
    return this.msalService.clientApplication.getUser().displayableId;
  }

  logout() {
    this.msalService.logout();
  }
}
