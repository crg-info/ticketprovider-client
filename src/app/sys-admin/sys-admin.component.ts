 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-sys-admin',
  templateUrl: './sys-admin.component.html',
  styleUrls: ['./sys-admin.component.css']
})
export class SysAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
  signForm: FormGroup;
  ngOnInit() {

    this.signForm = this.formBuilder.group({
      id: [],
      username: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      firstName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      lastName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      companyName: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      phonenumber: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      password: ['', [Validators.required ]],
      conformpassword: ['', [Validators.required ]],
      
    });
  }

  onSubmit() {
    this.apiService.createSysAdmin(this.signForm.value)
      .subscribe( data => {
        this.router.navigate(['list-admin']);
      });
  }
  }


