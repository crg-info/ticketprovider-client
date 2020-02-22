import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {ApiService} from "../core/api.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  age: number;
  users: User[];
  FirstName: any;
  UserName: (UserName: any) => void;
  subscribe: any;
  dataService: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  //  this.FirstName = null;
  }

  private search() {
    // this.dataService.getCustomersByFirstName(this.UserName)
    //   this.subscribe(users => this.users = users);
  }
 

  onSubmit() {
    //this.search();
  }
}


 
