import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
selector: 'app-login-employee',
 templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {
 

  loginemployeeForm: FormGroup;
  invalidLoginemployee: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

 onSubmit() {debugger;
    if (this.loginemployeeForm.invalid) {
      return;
    }
   const loginemployeePayload = {
      employeename: this.loginemployeeForm.controls.username.value,
      password: this.loginemployeeForm.controls.password.value
    }
   this.apiService.login(loginemployeePayload).subscribe(data => {
      debugger;
      if(data.status === 200) {
      window.localStorage.setItem('token', data.result.token);
this.router.navigate(['list-employee']);
      }else {debugger;
       this.invalidLoginemployee = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginemployeeForm = this.formBuilder.group({
      employeename: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
