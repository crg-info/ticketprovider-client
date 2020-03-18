import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { AddBussesComponent } from './bus/add-busses/add-busses.component';
import { SearchBussesComponent } from './bus/search-busses/search-busses.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: 'login-employee', component: LoginEmployeeComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  { path: 'search-user', component: SearchUserComponent},
  { path: 'search-employee', component: SearchEmployeeComponent},
  { path: 'search-student', component: SearchStudentComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'add-admin', component: AddAdminComponent},
  { path: 'edit-admin', component: EditAdminComponent},
  { path: 'list-admin', component: ListAdminComponent},
  { path: 'sys-admin', component: SysAdminComponent},
  { path: 'add-busses', component: AddBussesComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'search-busses', component: SearchBussesComponent},

];

export const routing = RouterModule.forRoot(routes);
