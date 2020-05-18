import { Component, OnInit } from '@angular/core';
import { Distribuidor } from '@models/distribuidor.model';
import { DistribuidorService } from '@services/distribuidor.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-distribuidor',
  templateUrl: './add-distribuidor.component.html',
  styleUrls: ['./add-distribuidor.component.scss'],
})
export class AddDistribuidorComponent implements OnInit {
  nDistribuidor = new Distribuidor(0, '', '', '', '', 1, 'RUC', '', '');

  icon = true;
  disableBtn = false;
  loading = false;
  succes = false;

  nombreFormControl = new FormControl('', [Validators.required]);
  documentoFormControl = new FormControl('', [Validators.required]);
  tipodocFormControl = new FormControl('', [Validators.required]);
  correoFormControl = new FormControl('', [Validators.email]);
  direccionFormControl = new FormControl('', [Validators.minLength(4)]);
  perscontactFormControl = new FormControl('', [Validators.minLength(4)]);
  telefonoFormControl = new FormControl('', [Validators.minLength(4)]);

  constructor(
    private _dServices: DistribuidorService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.tipodocFormControl.setValue('RUC');
    this.nDistribuidor.perscontact
  }

  onSubmit() {
    if (this.nDistribuidor.nombre != '' && this.nDistribuidor.nrodoc != '') {
      console.log(this.nDistribuidor);
      this.disableAll();
      this.loading = true;
      this.registrarCliente(this.nDistribuidor);
    } else if (this.nDistribuidor.nombre == '') {
      this.nombreFormControl.markAllAsTouched();
    } else if (this.nDistribuidor.nrodoc == '') {
      this.documentoFormControl.markAllAsTouched();
    }
  }
  disableAll(): void {
    this.icon = false;
    this.disableBtn = true;
    this.nombreFormControl.disable();
    this.documentoFormControl.disable();
    this.perscontactFormControl.disable();
    this.tipodocFormControl.disable();
    this.correoFormControl.disable();
    this.direccionFormControl.disable();
    this.telefonoFormControl.disable();
  }
  registrarCliente(newDistribuidor: Distribuidor): void {
    this._dServices.registrarDistribuidor(newDistribuidor).subscribe(
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
      `Distribuidor ${this.nDistribuidor.nombre} ha sido registrado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/distribuidores']);
    }, 500);
  }
}
