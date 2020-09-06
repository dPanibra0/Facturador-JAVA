import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-productos-stock',
  templateUrl: './productos-stock.component.html',
  styleUrls: ['./productos-stock.component.scss']
})
export class ProductosStockComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductosStockComponent>,
    public deleteElement: MatDialogRef<ProductosStockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
