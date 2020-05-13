import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from './../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin: ElementRef;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private _userService: UserService
  ) {}

  hide = true;
  loading = false;
  valid = false;
  disableSubmit = false;
  done = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      let email = this.emailFormControl.value;
      let Password = this.passwordFormControl.value;
      this._snackBar.dismiss();
      this.load();
      this._userService.login(email, Password).subscribe(
        (data) => {
          if (data.access_token) {            
            this._userService.setToken(data.access_token);
            this.loginSucces();
          }
        },
        (error) => {
          console.log(error);
          this.loginError();
        }
      );
    }
  }
  load() {
    this.disableSubmit = true;
    this.loading = true;
    this.valid = true;
  }
  loginError() {
    this.passwordFormControl.setValue('');
    this.disableSubmit = false;
    this.loading = false;
    this.valid = false;
    this.openSnackBar();
  }
  loginSucces() {
    this.loading = false;
    this.done = true;
    this.loginAnimation();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2500);
  }

  loginAnimation() {
    this.formLogin.nativeElement.classList.add('animationLogin');
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['error-snackbar'];
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';

    this._snackBar.open('Email o Password incorrecto', 'x', config);
  }

  ngOnInit(): void {}
}
