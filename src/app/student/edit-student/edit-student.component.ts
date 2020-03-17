import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';

import { first } from 'rxjs/operators';
import { Student } from '../../model/student.model';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let studentId = window.localStorage.getItem("editStudentId");
    if(!studentId) {
      alert("Invalid action.")
      this.router.navigate(['list-student']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      studentname: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      rollno: ['', Validators.required],
      branch: ['', Validators.required]
    });
    debugger;
    this.apiService.getStudentById(+studentId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {debugger;
    this.apiService.updateStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Student updated successfully.');
            this.router.navigate(['list-student']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }


}
