import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let employeeId = window.localStorage.getItem("editEmployeeId");
    if(!employeeId) {
      alert("Invalid action.")
      this.router.navigate(['list-employee']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      employeename: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.apiService.getEmployeeById(+employeeId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {debugger;
    this.apiService.updateEmployee(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Employee updated successfully.');
            this.router.navigate(['list-employee']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
