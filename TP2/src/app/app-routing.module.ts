import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { TiendaCompraComponent } from './componentes/tienda-compra/tienda-compra.component';
import { TiendaPrincipalComponent } from './componentes/tienda-principal/tienda-principal.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'tienda',
    component: TiendaPrincipalComponent
  },
  {
    path: 'compra',
    component: TiendaCompraComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
