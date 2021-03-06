import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
debugger;
    alert(window.localStorage.getItem('token'))
    this.addForm = this.formBuilder.group({
      id: [],
    employeename: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      password: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(8)]],
      firstName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      lastName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

  }

  onSubmit() {debugger;
    this.apiService.createEmployee(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-employee']);
      });
  }

}
