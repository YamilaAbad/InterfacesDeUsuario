import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BotonNeonComponent } from './componentes/boton-neon/boton-neon.component';
import { AvatarUserComponent } from './componentes/avatar-user/avatar-user.component';
import { CargarPaginaComponent } from './componentes/cargar-pagina/cargar-pagina.component';
import { InfoSaldoComponent } from './componentes/info-saldo/info-saldo.component';
import { AvatarsEditComponent } from './componentes/avatars-edit/avatars-edit.component';
import { FooterComponent } from './footer/footer.component';
import { IgNavbarComponent } from './componentes/ig-navbar/ig-navbar.component';

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
    IgNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
