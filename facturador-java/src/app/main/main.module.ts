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
import { ComprasComponent } from './compras/compras.component';
import { InventarioComponent } from './inventario/inventario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';

import { AddClienteComponent } from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { ListClienteComponent } from './clientes/list-cliente/list-cliente.component';

import { AddDistribuidorComponent } from './distribuidores/add-distribuidor/add-distribuidor.component';
import { EditDistribuidorComponent } from './distribuidores/edit-distribuidor/edit-distribuidor.component';
import { ListDistribuidorComponent } from './distribuidores/list-distribuidor/list-distribuidor.component';

@NgModule({
  declarations: [
    MainComponent,
    QuickMenuComponent,
    SidebarMenuComponent,
    ContainerComponent,
    VentasComponent,
    ComprasComponent,
    InventarioComponent,
    UsuariosComponent,
    ReportesComponent,
    ConfiguracionesComponent,
    BusquedaComponent,
    HomeComponent,
    UserComponent,
    AddClienteComponent,
    EditClienteComponent,
    ListClienteComponent,
    DeleteDialogComponent,
    AddDistribuidorComponent,
    EditDistribuidorComponent,
    ListDistribuidorComponent,
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  entryComponents:[DeleteDialogComponent]
})
export class MainModule {}
