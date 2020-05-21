import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';

import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../core/guards/admin.guard';

import { ListDistribuidorComponent } from './distribuidores/list-distribuidor/list-distribuidor.component';
import { AddDistribuidorComponent } from './distribuidores/add-distribuidor/add-distribuidor.component';
import { EditDistribuidorComponent } from './distribuidores/edit-distribuidor/edit-distribuidor.component';

import { ListClienteComponent} from './clientes/list-cliente/list-cliente.component';
import { AddClienteComponent} from './clientes/add-cliente/add-cliente.component';
import { EditClienteComponent} from './clientes/edit-cliente/edit-cliente.component';

import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';

import { ListProductoComponent } from './inventario/list-producto/list-producto.component';
import { AddProductoComponent } from './inventario/add-producto/add-producto.component';
import { EditProductoComponent } from './inventario/edit-producto/edit-producto.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'distribuidores', component:ListDistribuidorComponent},
      { path: 'distribuidores/add', component:AddDistribuidorComponent},
      { path: 'distribuidores/:id', component:EditDistribuidorComponent},
      { path: 'clientes', component: ListClienteComponent },
      { path: 'clientes/add', component: AddClienteComponent },
      { path: 'clientes/:id', component: EditClienteComponent },
      { path: 'usuarios', component: ListUsuarioComponent },
      { path: 'usuarios/add', component: AddUsuarioComponent },
      { path: 'usuarios/:id', component: EditUsuarioComponent },
      { path: 'inventario', component: ListProductoComponent },
      { path: 'inventario/add', component: AddProductoComponent },
      { path: 'inventario/:id', component: EditProductoComponent },
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
