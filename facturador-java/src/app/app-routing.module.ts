import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';

import { LogedGuard } from './core/guards/loged.guard';
import { LogoutGuard } from './core/guards/logout.guard';

const routes: Routes = [
  { path: '', component: LoadScreenComponent,canActivate:[LogedGuard] },
  { path: 'login', component: LoginComponent,canActivate:[LogoutGuard] },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
    ,canActivate:[LogedGuard]
  },
  { path: '**',redirectTo:'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
