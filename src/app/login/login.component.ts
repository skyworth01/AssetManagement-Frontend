import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  openNotification() {
    this.toast.error({
      detail: 'Incorrect Username or Password',
      duration: 2000,
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    } else {
      console.log(this.loginForm.value);
      
      this.loginService.getData(this.loginForm.value).subscribe(
        (response) => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('name', response.body.name);
          localStorage.setItem('title', response.body.title);

          console.log(response);
          this.router.navigate(['/dashboard']);
          this.loginForm.reset();
        },
        (error) => {
          console.log(error);
          this.openNotification();
          this.loginForm.reset();
        }
      );
    }
  }

  get userNameValidation() {
    return this.loginForm.get('username');
  }
  get passwordValidation() {
    return this.loginForm.get('password');
  }
}
