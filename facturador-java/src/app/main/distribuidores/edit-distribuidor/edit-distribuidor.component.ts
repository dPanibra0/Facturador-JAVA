import { Component, OnInit, Inject } from '@angular/core';
import { Distribuidor } from '@models/distribuidor.model';
import { DistribuidorService } from '@services/distribuidor.service';
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
  selector: 'app-edit-distribuidor',
  templateUrl: './edit-distribuidor.component.html',
  styleUrls: ['./edit-distribuidor.component.scss'],
})
export class EditDistribuidorComponent implements OnInit {
  nDistribuidor = new Distribuidor(0, '', '', '', '', 1, 'RUC', '', '');
  course: any;
  icon = true;
  disableBtn = false;
  disableEdit = false;
  loading = false;
  succes = false;

  distribuidor = false;

  editing = false;

  animal: string;
  name: string;

  nombreFormControl = new FormControl('', [Validators.required]);
  documentoFormControl = new FormControl('', [Validators.required]);
  tipodocFormControl = new FormControl('', [Validators.required]);
  correoFormControl = new FormControl('', [Validators.email]);
  direccionFormControl = new FormControl('', [Validators.minLength(4)]);
  perscontactFormControl = new FormControl('', [Validators.minLength(4)]);
  telefonoFormControl = new FormControl('', [Validators.minLength(4)]);

  constructor(
    private _cService: DistribuidorService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe((params) => {
      this.course = params.id;
      this.getDistribuidor(this.course);
    });
  }

  ngOnInit(): void {this.nDistribuidor.iddistrib}

  onSubmit() {
    if (this.nDistribuidor.nombre != '' && this.nDistribuidor.nrodoc != '') {
      console.log(this.nDistribuidor);
      this.disableAll();
      this.loading = true;
      this.registrarDistribuidor(this.nDistribuidor);
    } else if (this.nDistribuidor.nombre == '') {
      this.nombreFormControl.markAllAsTouched();
    } else if (this.nDistribuidor.nrodoc == '') {
      this.documentoFormControl.markAllAsTouched();
      this.nDistribuidor.correo;
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
    this.perscontactFormControl.disable();
    this.telefonoFormControl.disable();
  }
  getDistribuidor(idDistribuidor: number): void {
    this._cService.getDistribuidorById(idDistribuidor).subscribe(
      (data: Distribuidor) => {
        this.nDistribuidor = Object.assign(data);
        this.nDistribuidor.tipodoc = data.tipodoc;
        this.distribuidor = true;
        this.tipodocFormControl.setValue(`${data.tipodoc}`);
        this.disableAll();
      },
      (error) => {}
    );
  }
  registrarDistribuidor(newDistribuidor: Distribuidor): void {
    this._cService.editDistribuidor(newDistribuidor).subscribe(
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
    this.perscontactFormControl.enable();
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
      `Distribuidor ${this.nDistribuidor.nombre} ha sido editado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/distribuidores']);
    }, 1500);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { type: 'Distribuidor', name: this.nDistribuidor.nombre },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteDistribuidor(this.nDistribuidor.iddistrib);
      }
    });
  }
  deleteDistribuidor(idDistribuidor: number): void {
    this._cService.deleteDistribuidor(idDistribuidor).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/main/distribuidores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
