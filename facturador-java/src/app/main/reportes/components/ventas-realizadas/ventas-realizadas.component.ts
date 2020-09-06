import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-ventas-realizadas',
  templateUrl: './ventas-realizadas.component.html',
  styleUrls: ['./ventas-realizadas.component.scss']
})
export class VentasRealizadasComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VentasRealizadasComponent>,
    public deleteElement: MatDialogRef<VentasRealizadasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
