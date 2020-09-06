import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-detalle-venta",
  templateUrl: "./detalle-venta.component.html",
  styleUrls: ["./detalle-venta.component.scss"],
})
export class DetalleVentaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DetalleVentaComponent>,
    public deleteElement: MatDialogRef<DetalleVentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
