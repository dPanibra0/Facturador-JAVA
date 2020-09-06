import { Component, OnInit } from '@angular/core';
import { Usuario } from '@models/usuario.model';
import { UsuarioService } from '@services/usuario.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './../../components/delete-dialog/delete-dialog.component';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss'],
})
export class EditUsuarioComponent implements OnInit {
  nUsuario = new Usuario(0, '', '', 1, '', 1);

  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  icon = true;
  disableBtn = false;
  disableEdit = false;
  loading = false;
  succes = false;
  hide = true;
  course: any;

  usuario = false;

  editing = false;

  confirmPass='';
  editUser=false;
  editConfirm=false;

  constructor(
    private _dServices: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.myForm = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        tipo: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: [''],
      },
      { validator: this.checkPasswords }
    );
    this.route.params.subscribe((params) => {
      this.course = params.id;
      this.getUsuario(this.course);
    });
  }

  ngOnInit(): void {
    // this.myForm.get('tipo').setValue('1');
  }

  onSubmit() {
    console.log(this.nUsuario);
    if (this.myForm.valid === true) {
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
  editOn() {
    this.icon = true;
    this.editing = true;
    this.disableBtn = false;
    this.myForm.enable();
    this.editUser=true;
    this.nUsuario.pass='';
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
  getUsuario(idUsuario: number): void {
    this._dServices.getUsuarioById(idUsuario).subscribe(
      (data: Usuario) => {
        this.nUsuario = Object.assign(data);
        this.nUsuario.tipo = data.tipo;
        this.usuario = true;
        this.myForm.get('tipo').setValue(`${data.tipo}`);
        this.editConfirm=true;
        this.disableAll();
      },
      (error) => {}
    );
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['success-snackbar'];
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';

    this._snackBar.open(
      `Usuario ${this.nUsuario.nombre} ha sido editado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/usuarios']);
    }, 500);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { type: 'Usuario', name: this.nUsuario.nombre },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteUsuario(this.nUsuario.idusuario);
      }
    });
  }
  deleteUsuario(idUsuario: number): void {
    this._dServices.deleteUsuario(idUsuario).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/main/usuarios']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
