import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../core/api.service";
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getEmployees()
      .subscribe( data => {
          this.employees = data.result;
      });
  }

  deleteEmployee(employee: Employee): void {
    this.apiService.deleteEmployee(employee.id)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

  editEmployee(employee: Employee): void {
    window.localStorage.removeItem("editEmployeeId");
    window.localStorage.setItem("editEmployeeId", employee.id.toString());
    this.router.navigate(['edit-employee']);
  };

  addEmployee(): void {
    this.router.navigate(['add-employee']);
  };
}
