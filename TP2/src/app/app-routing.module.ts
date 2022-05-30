import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { IgHomeComponent } from './componentes/ig-home/ig-home.component';

import { LoginComponent } from './componentes/login/login.component';
import { TiendaCompraComponent } from './componentes/tienda-compra/tienda-compra.component';
import { TiendaPrincipalComponent } from './componentes/tienda-principal/tienda-principal.component';
import { JuegoComoJugarComponent } from './juego-como-jugar/juego-como-jugar.component';
import { JuegoEjecutandoComponent } from './juego-ejecutando/juego-ejecutando.component';
import { JuegoComponent } from './juego/juego.component';
import { LoginCrearCuentaComponent } from './login-crear-cuenta/login-crear-cuenta.component';
import { LoginCuentaComponent } from './login-cuenta/login-cuenta.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';



const routes: Routes = [
  {
    path: 'home',
    component: IgHomeComponent
  },
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
  },
  {
    path: 'login-cuenta',
    component: LoginCuentaComponent
  },
  {
    path: 'login-facebook',
    component: LoginFacebookComponent
  },
  {
    path: 'crear-cuenta',
    component: LoginCrearCuentaComponent
  },
  {
    path: 'juego',
    component: JuegoComponent
  },
  {
    path: 'como-jugar',
    component:JuegoComoJugarComponent
  },
  {
    path:'ejecutando',
    component:JuegoEjecutandoComponent
  },
  {
    path: 'preguntas-frecuentes',
    component:PreguntasFrecuentesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
