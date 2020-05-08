import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { LoadScreenComponent} from './load-screen/load-screen.component';
const routes: Routes = [
  { path: '', component: LoadScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
