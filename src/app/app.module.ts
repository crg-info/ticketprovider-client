import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';

import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from 'user-filter.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { AddBussesComponent } from './bus/add-busses/add-busses.component';
import { SearchBussesComponent } from './bus/search-busses/search-busses.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    
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
    UserFilterPipe,
    EmployeeComponent,
    StudentComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    AdminComponent,
    AddAdminComponent,
    EditAdminComponent,
    ListAdminComponent,
    SysAdminComponent,
    AddBussesComponent,
    SearchBussesComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
   
    BrowserAnimationsModule,
    FormsModule,
    UserModule,
    EmployeeModule,
    StudentModule,
  
  
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
