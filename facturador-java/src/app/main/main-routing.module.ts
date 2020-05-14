import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';

import { ListClienteComponent} from './clientes/list-cliente/list-cliente.component';
import { AddClienteComponent} from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent} from './clientes/edit-cliente/edit-cliente.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../core/guards/admin.guard';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'distribuidores', component: DistribuidoresComponent },
      { path: 'clientes', component: ListClienteComponent },
      { path: 'clientes/add', component: AddClienteComponent },
      { path: 'clientes/editcliente', component: EditClienteComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent,canActivate:[AdminGuard] },
      { path: 'configuraciones', component: ConfiguracionesComponent },
      { path: 'busqueda', component: BusquedaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
