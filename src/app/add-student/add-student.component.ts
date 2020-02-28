import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,private router: Router,private apiService: ApiService) { }

  addForm: FormGroup;
  
  ngOnInit() {
    //alert(window.localStorage.getItem('token'))
    this.addForm = this.formBuilder.group({
      id: [],
    studentname: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      password: ['', [Validators.required ,Validators.minLength(2) , Validators.maxLength(10)]],
      firstName: ['', [Validators.required ,Validators.minLength(2) , Validators.maxLength(10)]],
      lastName: ['', [Validators.required ,Validators.minLength(2) , Validators.maxLength(10)]],
      rollno: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }
  onSubmit() {debugger;
    this.apiService.createStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-student']);
      });
  }
  get f() { return this.addForm.controls; }
}
