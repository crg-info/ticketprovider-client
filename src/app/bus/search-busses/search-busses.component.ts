import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-busses',
  templateUrl: './search-busses.component.html',
  styleUrls: ['./search-busses.component.css']
})
export class SearchBussesComponent implements OnInit {
 

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  searchForm: FormGroup;

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.searchForm = this.formBuilder.group({
      from: [''],
      to: [''],
      journeyDate: ['']
      
    });
  }
  onSubmit() {debugger;
    var journyDetails:any;
    journyDetails={"from":this.searchForm.controls.from.value,
                       "to":this.searchForm.controls.to.value,
                       "journeyDate":this.searchForm.controls.journeyDate.value
                      };
    this.apiService.getBusList(journyDetails)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }
}
