import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      travelName: ['', [Validators.required ]],
      adminName: ['', [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]],
      email: ['', [Validators.required ]],
      phonenumber: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      adminBusses: ['', [Validators.required ]],
      createDate: ['', [Validators.required ]],
      expireDate: ['', [Validators.required ]],
    });
 }

 onSubmit() {debugger;
  this.apiService.createAdmin(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['list-admin']);
    });
}

}

