import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-historial-cliente",
  templateUrl: "./historial-cliente.component.html",
  styleUrls: ["./historial-cliente.component.scss"],
})
export class HistorialClienteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HistorialClienteComponent>,
    public deleteElement: MatDialogRef<HistorialClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
