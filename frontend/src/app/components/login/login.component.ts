import { Component, OnInit } from '@angular/core';
import { GlobalConstants, StatusService } from '../../services/status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  usersForms: any = FormGroup;
  responseMessage: any;

  constructor(
    private statusService: StatusService, 
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.createFormUsers()
  }

  createFormUsers() {
    this.usersForms = this.fb.group({
      email: ['', [Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password: ['', [Validators.required]],
    });
  }

  loginFormUsers(){
    var data = this.usersForms.value
    this.statusService.loginUsers(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      const token = response.accessToken;
      localStorage.setItem('jwtToken', token);
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

}
