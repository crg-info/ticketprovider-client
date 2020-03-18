import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  searchTerm: string;
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {

   
  }
  addAdmin(): void {
    this.router.navigate(['add-admin']);
  }; 
 
}
