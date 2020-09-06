import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { MatDialog } from "@angular/material/dialog";
import { DetalleVentaComponent } from "./components/detalle-venta/detalle-venta.component";
import { HistorialClienteComponent } from "./components/historial-cliente/historial-cliente.component";
import { ProductosRankingComponent} from './components/productos-ranking/productos-ranking.component';
import { ProductosStockComponent}from './components/productos-stock/productos-stock.component';
import { ProductosVencerComponent} from './components/productos-vencer/productos-vencer.component';
import { VentasRealizadasComponent} from './components/ventas-realizadas/ventas-realizadas.component';
@Component({
  selector: "app-reportes",
  templateUrl: "./reportes.component.html",
  styleUrls: ["./reportes.component.scss"],
})
export class ReportesComponent implements OnInit {
  constructor(public _dialog: MatDialog) {}

  ngOnInit(): void {
    new Chart("reportChart", {
      type: "line",
      data: {
        labels: ["02/5", "08/05", "18/05", "30/05"],
        datasets: [
          {
            data: [6, 14, 10, 5],
            label: "Juan",
            borderColor: "#3e95cd",
            backgroundColor: "#3e95cd77",
            fill: true,
          },
          {
            data: [2, 3, 11, 5],
            label: "Pepito",
            borderColor: "#8e5ea2",
            backgroundColor: "#8e5ea277",

            fill: true,
          },
          {
            data: [8, 17, 18, 10],
            label: "Ana",
            borderColor: "#3cba9f",
            backgroundColor: "#3cba9f77",
            fill: true,
          },
          {
            data: [4, 20, 10, 16, 24],
            label: "Latin Marcos",
            borderColor: "#e8c3b9",
            backgroundColor: "#e8c3b977",
            fill: true,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Ventas de la ultima semana",
        },
      },
    });
  }
  openDetalleVenta() {
    const dialogRef = this._dialog.open(DetalleVentaComponent, {
      width: "400px",
      data: "example",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
  openHistorialCLiente() {
    const dialogRef = this._dialog.open(HistorialClienteComponent, {
      width: "400px",
      data: "example",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
  openProductosRanking(){
    const dialogRef = this._dialog.open(ProductosRankingComponent, {
      width: "400px",
      data: "example",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
  openProductosStock(tipo:string){
    const dialogRef = this._dialog.open(ProductosStockComponent, {
      width: "400px",
      data: tipo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
  openProductosVencer(){
    const dialogRef = this._dialog.open(ProductosVencerComponent, {
      width: "400px",
      data: 'data',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
  openVentasRealizadas(tipo:string){
    const dialogRef = this._dialog.open(VentasRealizadasComponent, {
      width: "400px",
      data: tipo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        console.log("nice");
      }
    });
  }
}
