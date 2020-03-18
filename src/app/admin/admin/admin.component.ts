import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
  signForm: FormGroup;
  ngOnInit() {

    this.signForm = this.formBuilder.group({
      id: [],
      username: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      firstName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      lastName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      travelName: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      phonenumber: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      password: ['', [Validators.required ]],
      conformpassword: ['', [Validators.required ]],
      
    });
  }
  onSubmit() {
    this.apiService.createAdmin(this.signForm.value)
      .subscribe( data => {
        this.router.navigate(['admin-busses']);
      });
  }
}
