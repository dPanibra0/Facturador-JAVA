import { Component, OnInit } from '@angular/core';
import { Cliente } from '@models/cliente.model';
import { ClienteService } from '@services/cliente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss'],
})
export class AddClienteComponent implements OnInit {
  nCliente = new Cliente(0, '', '', '', '', 1, 'RUC', '');

  icon = true;
  disableBtn = false;
  loading = false;
  succes = false;

  nombreFormControl = new FormControl('', [Validators.required]);
  documentoFormControl = new FormControl('', [Validators.required]);
  tipodocFormControl = new FormControl('', [Validators.required]);
  correoFormControl = new FormControl('', [Validators.email]);
  direccionFormControl = new FormControl('', [Validators.minLength(4)]);
  telefonoFormControl = new FormControl('', [Validators.minLength(4)]);

  constructor(private _cService: ClienteService,private router: Router,
    private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.tipodocFormControl.setValue('RUC');
  }

  onSubmit() {
    if (this.nCliente.$nombre != '' && this.nCliente.$nrodoc != '') {
      console.log(this.nCliente);
      this.disableAll();
      this.loading = true;
      this.registrarCliente(this.nCliente);
    } else if (this.nCliente.$nombre == '') {
      this.nombreFormControl.markAllAsTouched();
    } else if (this.nCliente.$nrodoc == '') {
      this.documentoFormControl.markAllAsTouched();
      this.nCliente.$correo;
    }
  }
  disableAll(): void {
    this.icon = false;
    this.disableBtn = true;
    this.nombreFormControl.disable();
    this.documentoFormControl.disable();
    this.tipodocFormControl.disable();
    this.correoFormControl.disable();
    this.direccionFormControl.disable();
    this.telefonoFormControl.disable();
  }
  registrarCliente(newCliente: Cliente): void {
    this._cService.registrarCliente(this.nCliente).subscribe(
      (data) => {
        if (data.message == 'Success') {
          this.loading = false;
          this.succes = true;
          this.openSnackBar();
        }

        console.log(data);
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

    this._snackBar.open(`${this.nCliente.$nombre} ha sido registrado exitosamente`, 'x', config);
    setTimeout(() => {
      this.router.navigate(['/main/clientes']);
    }, 1500);
  }
}
