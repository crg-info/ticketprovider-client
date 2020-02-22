import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  
  students: Student[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    debugger;
    this.apiService.getStudents()
      .subscribe( data => {
          this.students = data.result;
      });
  }

  deleteStudent(student: Student): void {
    this.apiService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };

  editStudent(student: Student): void {
    window.localStorage.removeItem("editStudentId");
    window.localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['edit-student']);
  };

  addStudent(): void {debugger;
    this.router.navigate(['add-student']);
  };
}


