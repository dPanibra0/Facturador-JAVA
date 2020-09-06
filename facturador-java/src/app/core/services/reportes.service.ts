import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ReportesService {
  constructor(private http: HttpClient) {}

  getDetalleVenta(codVenta: number): Observable<any> {
    return this.http.get<any>(`/reportes/ver_detalle_venta_especifica/${codVenta}`);
  }
  getHistorialCliente(idCliente: number): Observable<any> {
    return this.http.get<any>(`/reportes/ver_compras_clientes/${idCliente}`);
  }
  getPoductosVencer(fecini: string, fecfin: string): Observable<any> {
    let params = new HttpParams();
    params = params.append("fecini", fecini);
    params = params.append("fecfin", fecfin);
    return this.http.get<any>(`/reportes/ver_productos_por_vencer`,{ params: params });
  }
  getStockProductosMayores(categoria: string, cantidad: any): Observable<any> {
    let params = new HttpParams();
    params = params.append("categoria", categoria);
    params = params.append("cantidad", cantidad);
    return this.http.get<any>(`/reportes/ver_stock_productos_mayores`,{ params: params });
  }
  getStockProductosMenores(categoria: string, cantidad: any): Observable<any> {
    let params = new HttpParams();
    params = params.append("categoria", categoria);
    params = params.append("cantidad", cantidad);
    return this.http.get<any>(`/reportes/ver_stock_productos_menores`,{ params: params });
  }
  getRankingProductos(categoria: string, fecini: string, fecfin: string): Observable<any> {
    let params = new HttpParams();
    params = params.append("valor", categoria);
    params = params.append("fecini", fecini);
    params = params.append("fecfin", fecfin);
    return this.http.get<any>(`/reportes/ver_ranking_productos/${categoria}`,{ params: params });
  }
  getVentasRealizadas(metodoPago: any,vendedor: any, fecini: string, fecfin: string): Observable<any> {
    let params = new HttpParams();
    params = params.append("metodoPago", metodoPago);
    params = params.append("vendedor", vendedor);
    params = params.append("fecini", fecini);
    params = params.append("fecfin", fecfin);
    return this.http.get<any>(`/reportes/ver_ventas_realizadas_ventas`,{ params: params });
  }
  getVentasRealizadasDetalles(metodoPago: any,vendedor: any, fecini: string, fecfin: string): Observable<any> {
    let params = new HttpParams();
    params = params.append("metodoPago", metodoPago);
    params = params.append("vendedor", vendedor);
    params = params.append("fecini", fecini);
    params = params.append("fecfin", fecfin);
    return this.http.get<any>(`/reportes/ver_ventas_realizadas_ventas_detalle`,{ params: params });
  }
}
