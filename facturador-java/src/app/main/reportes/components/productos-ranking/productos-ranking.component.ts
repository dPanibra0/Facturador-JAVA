import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-productos-ranking',
  templateUrl: './productos-ranking.component.html',
  styleUrls: ['./productos-ranking.component.scss']
})
export class ProductosRankingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductosRankingComponent>,
    public deleteElement: MatDialogRef<ProductosRankingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
