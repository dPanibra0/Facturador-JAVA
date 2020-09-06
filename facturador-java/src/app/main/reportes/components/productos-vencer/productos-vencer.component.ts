import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-productos-vencer',
  templateUrl: './productos-vencer.component.html',
  styleUrls: ['./productos-vencer.component.scss']
})
export class ProductosVencerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductosVencerComponent>,
    public deleteElement: MatDialogRef<ProductosVencerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
