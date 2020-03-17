import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../core/api.service';



@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  
  //searchForm: FormGroup;
  public salary: number;
  users: User[];
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }
  getUserBySalary(): void {debugger;
    this.salary;
  this.apiService.getUserBySalary(this.salary)
  .subscribe( data => {
      this.users = data.result;
    });
 }

 }

 
