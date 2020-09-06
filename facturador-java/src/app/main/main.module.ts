import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { MaterialModule } from "./../material.module";

import { QuickMenuComponent } from "./components/quick-menu/quick-menu.component";
import { SidebarMenuComponent } from "./components/sidebar-menu/sidebar-menu.component";
import { ContainerComponent } from "./components/container/container.component";
import { UserComponent } from "./components/user/user.component";

import { ReportesComponent } from "./reportes/reportes.component";
import { ConfiguracionesComponent } from "./configuraciones/configuraciones.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";

import { LoadScreenComponent} from './load-screen/load-screen.component'
import { HomeComponent } from "./home/home.component";
// Clientes
import { AddClienteComponent } from "./clientes/add-cliente/add-cliente.component";
import { EditClienteComponent } from "./clientes/edit-cliente/edit-cliente.component";
import { ListClienteComponent } from "./clientes/list-cliente/list-cliente.component";
// Distribuidores
import { AddDistribuidorComponent } from "./distribuidores/add-distribuidor/add-distribuidor.component";
import { EditDistribuidorComponent } from "./distribuidores/edit-distribuidor/edit-distribuidor.component";
import { ListDistribuidorComponent } from "./distribuidores/list-distribuidor/list-distribuidor.component";
// Usuarios
import { AddUsuarioComponent } from "./usuarios/add-usuario/add-usuario.component";
import { EditUsuarioComponent } from "./usuarios/edit-usuario/edit-usuario.component";
import { ListUsuarioComponent } from "./usuarios/list-usuario/list-usuario.component";
// Productos
import { ListProductoComponent } from "./inventario/list-producto/list-producto.component";
import { AddProductoComponent } from "./inventario/add-producto/add-producto.component";
import { EditProductoComponent } from "./inventario/edit-producto/edit-producto.component";
// Compras
import { ListComprasComponent } from "./compras/list-compras/list-compras.component";
import { AddComprasComponent } from "./compras/add-compras/add-compras.component";
import { EditComprasComponent } from "./compras/edit-compras/edit-compras.component";
// Ventas
import { AddVentaComponent } from "./ventas/add-venta/add-venta.component";
import { EditVentaComponent } from "./ventas/edit-venta/edit-venta.component";
import { ListVentaComponent } from "./ventas/list-venta/list-venta.component";
// Dialogs
import { DeleteDialogComponent } from "./components/delete-dialog/delete-dialog.component";
import { ProductDialogComponent } from "./components/product-dialog/product-dialog.component";
import { UserDialogComponent } from "./components/user-dialog/user-dialog.component";
// Reportes Dialogs
import { DetalleVentaComponent } from "./reportes/components/detalle-venta/detalle-venta.component";
import { HistorialClienteComponent } from "./reportes/components/historial-cliente/historial-cliente.component";
import { ProductosVencerComponent } from "./reportes/components/productos-vencer/productos-vencer.component";
import { ProductosStockComponent } from "./reportes/components/productos-stock/productos-stock.component";
import { ProductosRankingComponent } from "./reportes/components/productos-ranking/productos-ranking.component";
import { VentasRealizadasComponent } from "./reportes/components/ventas-realizadas/ventas-realizadas.component";
@NgModule({
  declarations: [
    MainComponent,
    QuickMenuComponent,
    SidebarMenuComponent,
    ContainerComponent,
    ReportesComponent,
    ConfiguracionesComponent,
    BusquedaComponent,
    HomeComponent,
    LoadScreenComponent,
    UserComponent,
    DeleteDialogComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListClienteComponent,
    AddDistribuidorComponent,
    EditDistribuidorComponent,
    ListDistribuidorComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    ListUsuarioComponent,
    AddProductoComponent,
    EditProductoComponent,
    ListProductoComponent,
    ListComprasComponent,
    AddComprasComponent,
    EditComprasComponent,
    AddVentaComponent,
    EditVentaComponent,
    ListVentaComponent,
    ProductDialogComponent,
    UserDialogComponent,
    DetalleVentaComponent,
    HistorialClienteComponent,
    ProductosVencerComponent,
    ProductosStockComponent,
    ProductosRankingComponent,
    VentasRealizadasComponent,
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  entryComponents: [
    DeleteDialogComponent,
    ProductDialogComponent,
    UserDialogComponent,
    DetalleVentaComponent,
    HistorialClienteComponent,
    ProductosVencerComponent,
    ProductosStockComponent,
    ProductosRankingComponent,
    VentasRealizadasComponent,
  ],
})
export class MainModule {}
