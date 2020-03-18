import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
 
  editForm:FormGroup;

  ngOnInit() {
    let adminId = window.localStorage.getItem("editAdminId");
    if(!adminId) {
      alert("Invalid action.")
      this.router.navigate(['list-admin']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      travelName: ['', [Validators.required ]],
      adminName: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      phonenumber: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      adminBusses: ['', [Validators.required ]],
      createDate: ['', [Validators.required ]],
      expireDate: ['', [Validators.required ]],
    });
    this.apiService.getAdminById(+adminId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

}
