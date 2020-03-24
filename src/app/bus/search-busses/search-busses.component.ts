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

    this.searchForm = this.formBuilder.group({
      from: ['', [Validators.required ]],
      to: ['', [Validators.required ]],
      journeyDate: ['', [Validators.required ]],
      returnDate: ['', [Validators.required]]
    });
  }
  onSubmit() {debugger;
    this.apiService.searchBus(this.searchForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }
}
