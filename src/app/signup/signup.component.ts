import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private signupService: SignupService) { }
  
  signForm: FormGroup;

  ngOnInit() {

    this.signForm = this.formBuilder.group({
      id: [],
      userName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      dob: ['', [Validators.required ]],
      gender: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      phoneNumber: ['', [Validators.required ]],
      userStatus: ['active'],
    });
  }

  onSubmit() {debugger;
    var userDetails:any;
    userDetails={"userName":this.signForm.controls.userName.value,
                       "dob":this.signForm.controls.dob.value,
                       "gender":this.signForm.controls.gender.value,
                       "email":this.signForm.controls.email.value,
                       "phoneNumber":this.signForm.controls.phoneNumber.value,
                       "userStatus": this.signForm.controls.userStatus.value
                      };
    this.signupService.createRedBusUser(userDetails)
      .subscribe( data => {
        this.router.navigate(['search-busses']);
      });
  }
}
