import { NgModule, Injectable, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
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
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { LoginServisService } from './servicios/login-servis.service';


/* @Injectable() class LoginRequired implements CanActivate{
  constructor(private sessionService: LoginServisService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.sessionService.logIn();
    
  }
} */

const routes: Routes = [
  {
    path: 'home',
    component: IgHomeComponent
  },
  {
    path: 'tienda',
    component: TiendaPrincipalComponent,
    /* canActivate: [LoginRequired] */
  },
  {
    path: 'compra',
    component: TiendaCompraComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    /* canActivate: [LoginRequired] */
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
    path:'mensajeria',
    component:MensajeriaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
/*   providers: [LoginRequired], */
})
export class AppRoutingModule { }

/*******Codigo comentado pertenece al ruteo si se tuviera un backend****************/