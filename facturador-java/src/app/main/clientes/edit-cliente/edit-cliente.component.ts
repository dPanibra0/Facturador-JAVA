import { Component, OnInit, Inject } from '@angular/core';
import { Cliente } from '@models/cliente.model';
import { ClienteService } from '@services/cliente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './../../components/delete-dialog/delete-dialog.component';

export interface DialogData {
  type: string;
  name: string;
}
@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss'],
})
export class EditClienteComponent implements OnInit {
  nCliente = new Cliente(0, '', '', '', '', 1, 'RUC', '');
  course: any;
  icon = true;
  disableBtn = false;
  disableEdit = false;
  loading = false;
  succes = false;

  cliente = false;

  editing = false;

  animal: string;
  name: string;

  nombreFormControl = new FormControl('', [Validators.required]);
  documentoFormControl = new FormControl('', [Validators.required]);
  tipodocFormControl = new FormControl('', [Validators.required]);
  correoFormControl = new FormControl('', [Validators.email]);
  direccionFormControl = new FormControl('', [Validators.minLength(4)]);
  telefonoFormControl = new FormControl('', [Validators.minLength(4)]);

  constructor(
    private _cService: ClienteService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe((params) => {
      this.course = params.id;
      this.getCliente(this.course);
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.nCliente.nombre != '' && this.nCliente.nrodoc != '') {
      console.log(this.nCliente);
      this.disableAll();
      this.loading = true;
      this.registrarCliente(this.nCliente);
    } else if (this.nCliente.nombre == '') {
      this.nombreFormControl.markAllAsTouched();
    } else if (this.nCliente.nrodoc == '') {
      this.documentoFormControl.markAllAsTouched();
      this.nCliente.correo;
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
  getCliente(idCliente: number): void {
    this._cService.getClienteById(idCliente).subscribe(
      (data: Cliente) => {
        this.nCliente = Object.assign(data);
        this.nCliente.tipodoc = data.tipodoc;
        this.cliente = true;
        this.tipodocFormControl.setValue(`${data.tipodoc}`);
        this.disableAll();
      },
      (error) => {}
    );
  }
  registrarCliente(newCliente: Cliente): void {
    this._cService.editCliente(newCliente).subscribe(
      (data) => {
        if (data.message == 'Success') {
          this.loading = false;
          this.icon = false;
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
  editOn() {
    this.icon = true;
    this.editing = true;
    this.disableBtn = false;
    this.nombreFormControl.enable();
    this.documentoFormControl.enable();
    this.tipodocFormControl.enable();
    this.correoFormControl.enable();
    this.direccionFormControl.enable();
    this.telefonoFormControl.enable();
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['success-snackbar'];
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';

    this._snackBar.open(
      `Cliente ${this.nCliente.nombre} ha sido editado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/clientes']);
    }, 1500);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { type: 'Cliente', name: this.nCliente.nombre },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteCliente(this.nCliente.idcliente);
      }
    });
  }
  deleteCliente(idCliente: number): void {
    this._cService.deleteCliente(idCliente).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/main/clientes']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
