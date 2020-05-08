import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  
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
      this.disableSubmit = true;
      this.loading = true;
      this.valid = true;
      setTimeout(() => {
        this.loading = false;
        this.done = true;
        this.loginAnimation();
      }, 2000);
    }
  }

  loginAnimation(){
    let formLogin = document.getElementById('formLogin');
    let line = document.getElementById('line');
    let contentLogin = document.getElementById('contentLogin');

    formLogin.classList.add('animationLogin');
    formLogin.addEventListener('animationend',()=>{
      line.classList.add('lineAnimation');
      line.addEventListener('animationend',()=>{
        // contentLogin.classList.add('endLoginAnimation');
        // setTimeout(() => {
          
        //   this.router.navigate(['home'])
        // }, 2000);
        
      });
    });
    }


  ngOnInit(): void {}
}
