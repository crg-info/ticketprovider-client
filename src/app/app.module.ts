import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';

import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { SearchComponent } from './search/search.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from 'user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    SearchComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    LoginEmployeeComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    SearchUserComponent,
    SearchEmployeeComponent,
    SearchStudentComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
   
    BrowserAnimationsModule,
    FormsModule 
    

  
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
