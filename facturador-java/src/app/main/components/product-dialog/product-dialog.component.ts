import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { VentaDetalle } from "@models/ventaDetalle.model";
@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.scss"],
})
export class ProductDialogComponent implements OnInit {
  gananciaInd: number = 0;
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    public deleteElement: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VentaDetalle
  ) {}

  ngOnInit(): void {
    console.log(this.data.umedidausada);
    this.gananciaInd =parseFloat(this.intlRound(
      this.data.codproducto.preciove - this.data.codproducto.precioco));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  select(valor) {
    this.data.umedidausada = valor;
    if (valor == "Unidad") {
      this.data.prevesdind = this.data.codproducto.preciove;
    }
    if (valor == this.data.codproducto.promo1) {
      this.data.prevesdind = this.data.codproducto.prep1;
    }
    if (valor == this.data.codproducto.promo2) {
      this.data.prevesdind = this.data.codproducto.prep2;
    }

    this.descInd(this.data.descindiv);
  }
  cant(n) {
    this.data.subtotal = parseFloat(this.intlRound(this.data.prevesdtot * n));
    this.data.desctotal = parseFloat(this.intlRound(this.data.descindiv * n));
    this.data.ganancia = parseFloat(
      this.intlRound(
        this.gananciaInd * n - this.data.desctotal
      )
    );
  }
  descInd(descInd) {
    this.data.prevesdtot = parseFloat(
      this.intlRound(this.data.prevesdind - descInd)
    );
    this.data.desctotal = parseFloat(
      this.intlRound(descInd * this.data.cantidad)
    );
    this.data.subtotal = parseFloat(
      this.intlRound(this.data.cantidad * this.data.prevesdtot)
    );
    this.data.ganancia = parseFloat(
      this.intlRound(
        this.gananciaInd * this.data.cantidad - this.data.desctotal
      )
    );
  }
  precioCdescuento(precioCdescuento) {
    this.data.descindiv = parseFloat(
      this.intlRound(this.data.prevesdind - precioCdescuento)
    );
    this.descInd(this.data.descindiv);
  }
  descTotal(descTotal) {
    this.data.descindiv = parseFloat(
      this.intlRound(descTotal / this.data.cantidad)
    );
    this.descInd(this.data.descindiv);
  }

  intlRound(numero, decimales = 2, usarComa = false) {
    let opciones = {
      maximumFractionDigits: decimales,
      useGrouping: false,
    };
    return new Intl.NumberFormat(usarComa ? "es" : "en", opciones).format(
      numero
    );
  }
}
