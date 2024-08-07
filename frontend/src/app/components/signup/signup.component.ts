import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formUser, GlobalConstants, resString, StatusService } from '../../services/status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  usersForms: any = FormGroup;
  responseMessage: any;

  constructor(
    private statusService: StatusService, 
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router
  ) { }


  createFormUsers() {
    this.usersForms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: ['', [Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password: ['', [Validators.required]],
    });
  }

  sendFormUsers(){
    console.log(this.usersForms.value)
    var data = this.usersForms.value
    return this.statusService.registerUsers(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.snackbarService.openSnackbar(response.message, '');
      this.router.navigate(['/tasks']);
    },(error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    })
  }

  // return this.statusService.registerUsers(this.usersForms.value)

  ngOnInit(): void {
    this.createFormUsers()
  }

}
