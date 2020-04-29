import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/api.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  [x: string]: any;  

  constructor(private http: HttpClient) { }

  signupUrl: string = 'http://localhost:8080/redBusUsers/';

  createRedBusUser(userDetails:JSON):  Observable<ApiResponse> {debugger;
    return this.http.post<ApiResponse>(this.signupUrl, userDetails);
  }
}
