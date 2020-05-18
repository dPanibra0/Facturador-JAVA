import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export interface DialogData {
  type: string;
  name: string;
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    public deleteElement: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['error-snackbar'];
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';

    this._snackBar.open(
      `El ${this.data.type} ${this.data.name}  ha sido eliminado`,
      'x',
      config
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
