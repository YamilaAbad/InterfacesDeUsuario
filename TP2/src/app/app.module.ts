import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/************************SERVIS JS***************************/
import {CargarScriptsService} from "./cargar-scripts.service";

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BotonNeonComponent } from './componentes/boton-neon/boton-neon.component';
import { AvatarUserComponent } from './componentes/avatar-user/avatar-user.component';
import { CargarPaginaComponent } from './componentes/cargar-pagina/cargar-pagina.component';
import { InfoSaldoComponent } from './componentes/info-saldo/info-saldo.component';
import { AvatarsEditComponent } from './componentes/avatars-edit/avatars-edit.component';
import { FooterComponent } from './footer/footer.component';
import { TiendaPrincipalComponent } from './componentes/tienda-principal/tienda-principal.component';
import { TiendaCompraComponent } from './componentes/tienda-compra/tienda-compra.component';
import { IgNavbarComponent } from './componentes/ig-navbar/ig-navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFondoComponent } from './login-fondo/login-fondo.component';
import { LoginCuentaComponent } from './login-cuenta/login-cuenta.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { LoginCrearCuentaComponent } from './login-crear-cuenta/login-crear-cuenta.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegoComoJugarComponent } from './juego-como-jugar/juego-como-jugar.component';
import { JuegoEjecutandoComponent } from './juego-ejecutando/juego-ejecutando.component';
import { CatAccionComponent } from './componentes/cat-accion/cat-accion.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { MensajeriaComponent } from './mensajeria/mensajeria.component';
import { CatAventuraComponent } from './cat-aventura/cat-aventura.component';
import { CatCarreraComponent } from './cat-carrera/cat-carrera.component';
import { CatCasinoComponent } from './cat-casino/cat-casino.component';
import { CatDeporteComponent } from './cat-deporte/cat-deporte.component';
import { CatMesaComponent } from './cat-mesa/cat-mesa.component';
<<<<<<< HEAD
import { CatRolComponent } from './cat-rol/cat-rol.component';
=======
=======
>>>>>>> 6606416317a3dbd5c0e1cd01a69545fc7f3e2be8
import { LikeDislikeComponent } from './componentes/like-dislike/like-dislike.component';
import { ResultadoBusquedaSinResultadosComponent } from './resultado-busqueda-sin-resultados/resultado-busqueda-sin-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BotonNeonComponent,
    AvatarUserComponent,
    CargarPaginaComponent,
    InfoSaldoComponent,
    AvatarsEditComponent,
    FooterComponent,
    TiendaPrincipalComponent,
    TiendaCompraComponent,
    IgNavbarComponent,
    LoginComponent,
    LoginFondoComponent,
    LoginCuentaComponent,
    LoginFacebookComponent,
    LoginCrearCuentaComponent,
    JuegoComponent,
    JuegoComoJugarComponent,
    JuegoEjecutandoComponent,
    CatAccionComponent,
    PreguntasFrecuentesComponent,
    MensajeriaComponent,
    CatAventuraComponent,
    CatCarreraComponent,
    CatCasinoComponent,
    CatDeporteComponent,
    CatMesaComponent,
<<<<<<< HEAD
    CatRolComponent
=======
=======
>>>>>>> 6606416317a3dbd5c0e1cd01a69545fc7f3e2be8
    LikeDislikeComponent,
    ResultadoBusquedaSinResultadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
