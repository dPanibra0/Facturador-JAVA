import { Component, OnInit } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { UsuarioService } from '@services/usuario.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent implements OnInit {
  nUsuario = new Usuario(0, '', '', 1, '', 1);

  myForm: FormGroup;

  matcher = new MyErrorStateMatcher()

  icon = true;
  disableBtn = false;
  loading = false;
  succes = false;
  hide = true;
 
  constructor(
    private _dServices: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      nombre : [this.nUsuario.nombre,[Validators.required,Validators.minLength(2)]],
      tipo : ['',[Validators.required]],
      correo : ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }

  ngOnInit(): void {
    this.myForm.get('tipo').setValue('1')
  }

  onSubmit() {
   console.log(this.nUsuario);
   if(this.myForm.valid===true){
     this.disableAll();
     this.registrarUsuario(this.nUsuario);
   }
    
  }
  disableAll(): void {
    this.icon = false;
    this.disableBtn = true;
    this.loading = true;
    this.myForm.disable();
  }
  registrarUsuario(newUsuario: Usuario): void {
    this._dServices.registrarUsuario(newUsuario).subscribe(
      (data) => {
        console.log(data);
        if (data.message == 'Success') {
          this.loading = false;
          this.succes = true;
          this.openSnackBar();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['success-snackbar'];
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';

    this._snackBar.open(
      `Usuario ${this.nUsuario.nombre} ha sido registrado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/usuarios']);
    }, 500);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPassword').value;

  return pass === confirmPass ? null : { notSame: true }     
}
}
