import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Producto } from '@models/Producto.model';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get<Array<Producto>>('/productos');
  }
  registrarProducto(nuevoProducto: Producto): Observable<any> {
    return this.http.post<any>('/productos', nuevoProducto);
  }
  getProductoById(idProducto: number): Observable<Producto> {
    return this.http.get<any>(`/productos/${idProducto}`);
  }
  editProducto(Producto: Producto): Observable<any> {
    return this.http.put<any>('/productos', Producto);
  }
  deleteProducto(idProducto: number): Observable<any> {
    return this.http.delete<any>(`/productos/${idProducto}`);
  }
}
