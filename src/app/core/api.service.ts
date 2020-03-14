import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { Employee } from '../model/employee.model';
import { Student } from '../model/student.model';

@Injectable()
export class ApiService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';
  
  baseUrl1: string = 'http://localhost:8080/employees/';

  baseUrl2: string = 'http://localhost:8080/students/';

  login(loginPayload) : Observable<ApiResponse> {debugger;
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  //loginemployee(loginemployeePayload) : Observable<ApiResponse> {debugger;
   // return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginemployeePayload);
  //}

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }
  getUserBySalary(salary: number): Observable<ApiResponse> {debugger;
    return this.http.get<ApiResponse>(this.baseUrl+'searchUserById/'+ salary);
  }


  createUser(user: User): Observable<ApiResponse> {debugger;
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {debugger;
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

  getEmployees() : Observable<ApiResponse> {debugger;
    return this.http.get<ApiResponse>(this.baseUrl1);
  }

  getEmployeeById(id: number): Observable<ApiResponse> {debugger;
    return this.http.get<ApiResponse>(this.baseUrl1 + id);
  }

  createEmployee(employee: Employee): Observable<ApiResponse> {debugger;
    return this.http.post<ApiResponse>(this.baseUrl1, employee);
  }

  updateEmployee(employee: Employee): Observable<ApiResponse> {debugger;
    return this.http.put<ApiResponse>(this.baseUrl1 + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl1 + id);
  }

  getStudents() : Observable<ApiResponse> {debugger;
    return this.http.get<ApiResponse>(this.baseUrl2);
  }

  getStudentById(id: number): Observable<ApiResponse> {debugger;
    return this.http.get<ApiResponse>(this.baseUrl2 + id);
  }

  createStudent(student: Student): Observable<ApiResponse> {debugger;
    return this.http.post<ApiResponse>(this.baseUrl2, student);
  }

  updateStudent(student: Student): Observable<ApiResponse> {debugger;
    return this.http.put<ApiResponse>(this.baseUrl2 + student.id, student);
  }

  deleteStudent(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl2 + id);
  }
}
