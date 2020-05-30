import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from './../material.module';

import { QuickMenuComponent } from './components/quick-menu/quick-menu.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from './components/container/container.component';
import { UserComponent } from './components/user/user.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

import { VentasComponent } from './ventas/ventas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
// Clientes
import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './clientes/list-cliente/list-cliente.component';
// Distribuidores
import { AddDistribuidorComponent } from './distribuidores/add-distribuidor/add-distribuidor.component';
import { EditDistribuidorComponent } from './distribuidores/edit-distribuidor/edit-distribuidor.component';
import { ListDistribuidorComponent } from './distribuidores/list-distribuidor/list-distribuidor.component';
// Usuarios
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
// Productos
import { ListProductoComponent } from './inventario/list-producto/list-producto.component';
import { AddProductoComponent } from './inventario/add-producto/add-producto.component';
import { EditProductoComponent } from './inventario/edit-producto/edit-producto.component';
// Compras
import { ListComprasComponent } from './compras/list-compras/list-compras.component';
import { AddComprasComponent } from './compras/add-compras/add-compras.component';
import { EditComprasComponent } from './compras/edit-compras/edit-compras.component';

@NgModule({
  declarations: [
    MainComponent,
    QuickMenuComponent,
    SidebarMenuComponent,
    ContainerComponent,
    VentasComponent,
    ReportesComponent,
    ConfiguracionesComponent,
    BusquedaComponent,
    HomeComponent,
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
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  entryComponents:[DeleteDialogComponent]
})
export class MainModule {}
