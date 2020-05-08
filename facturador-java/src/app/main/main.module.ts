import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { QuickMenuComponent} from './components/quick-menu/quick-menu.component';
import { SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import { ContainerComponent} from './components/container/container.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MainComponent, QuickMenuComponent, SidebarMenuComponent, ContainerComponent, VentasComponent, ComprasComponent, InventarioComponent, DistribuidoresComponent, ClientesComponent, UsuariosComponent, ReportesComponent, ConfiguracionesComponent, BusquedaComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
