import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { LogedGuard } from "./core/guards/loged.guard";
import { LogoutGuard } from "./core/guards/logout.guard";
import { LogedCanload } from "./core/guards/loged.canload";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [LogoutGuard] },
  {
    path: "",
    canLoad: [LogedCanload],
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  { path: "**", redirectTo: "login", canActivate: [LogoutGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
